import { ChangeEvent, DetailedHTMLProps, ReactElement, TextareaHTMLAttributes, UIEvent, useCallback, useEffect, useRef, useState } from "react";
import { UiElementProps } from "../../../common";
import { InputLabel } from "../label";

export interface TextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, UiElementProps {
    /**
     * Input label, if you leave it empty no label will show
     */
    label?: ReactElement | string;
    /**
     * Input error message, when it is null or undefined, no error considered
     */
    errormessage?: string;
    /**
     * Chars count left renderer
     */
    charLeftCountRenderer?: (count: number) => ReactElement;
    defaultValue?: string;
};

interface TextAreaState {
    value?: any;
    charsLeftCount?: number;
    isHideCharCount?: boolean;
};

export const TextArea = (props: TextAreaProps) => {

    const [state, setState] = useState<TextAreaState>({ value: props.value, charsLeftCount: props.maxLength });

    const ref = useRef<HTMLTextAreaElement>(null);

    const handleOnScroll = (event: UIEvent<HTMLTextAreaElement>) => {
        // console.log(event);
        const target = event.currentTarget;
        const scrollOffset = target.scrollTop;
        const isHideCharCount = target.clientHeight + scrollOffset < target.scrollHeight;
        setState(prevState => ({ ...prevState, isHideCharCount }))
    }

    const handleCountOfCharactersHideAndShow = useCallback(() => {
        const target = ref.current;
        if (!target) return;

        const scrollOffset = target.scrollTop;
        const isHideCharCount = target.clientHeight + scrollOffset < target.scrollHeight;
        setState(prevState => ({ ...prevState, isHideCharCount }))
    }, []);

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange?.(event);
        handleCountOfCharactersHideAndShow();
    };


    const init = useCallback(() => {
        handleCountOfCharactersHideAndShow();
    }, [handleCountOfCharactersHideAndShow]);

    useEffect(() => {
        setState(prevState =>
        ({
            ...prevState, value: props.value,
            charsLeftCount: (props.maxLength ?? 0) - (props.value?.toString()?.length ?? 0)
        }));
    }, [props.maxLength, props.value])

    useEffect(() => { init() }, [init])

    return (
        <div className={`w-full h-full flex flex-col`}>
            <InputLabel inputId={props.id} content={props.label} className="block mb-2" />
            <div className={`relative ${props.className ?? ''}`}>
                <textarea
                    {...props}
                    ref={ref}
                    className={`border border-secondary text-gray-700 placeholder:text-gray-500 p-2 pb-6 rounded w-full 
                    h-full ${props.errormessage ? '!border-error' : ''}`}
                    title={props.title ?? props.placeholder}
                    onChange={handleOnChange}
                    onScroll={handleOnScroll}
                >{state.value}
                </textarea>
                {props.maxLength && props.charLeftCountRenderer
                    ? <span className={`absolute left-2 right-4 text-xs text-gray-400 bottom-[8px] 
                        transition-opacity p-1 ${state.isHideCharCount ? 'opacity-0' : ''}`}>
                        {props.charLeftCountRenderer?.(state.charsLeftCount ?? 0)}</span>
                    : null}
            </div>
            {props.errormessage && <p className="text-error text-xs italic mt-1">{props.errormessage}</p>}
        </div>
    )
}
