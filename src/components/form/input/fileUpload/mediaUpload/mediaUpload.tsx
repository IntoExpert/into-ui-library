import { MouseEvent, MouseEventHandler, ReactElement, useCallback, useState } from "react";
import { UiElementProps } from "../../../../common";
import { FileUpload, FileUploadProps } from "../fileUpload";
import { Button, ButtonProps } from "../../../../button";
import { RetakeButton } from "../retakeButton/retakeButton";
import { readFileThenGenerateUrl } from "../helpers";
import { Camera } from "../../../../camera/camera";
import { VideoPlayer } from "../../../../video";
import { dataURLtoFile } from "../../../../lib/files";

export interface MediaUploadProps extends UiElementProps {
    disabled?: boolean;
    uploadOptions?: FileUploadProps;
    mediaSrc?: string;
    mediaBody?: ReactElement | string
    uploadButton?: ButtonProps;
    retakeButton?: ButtonProps;
    mode?: "photo" | "video";
    onUpload?: (file: File) => void;
    onChange?: (url: string) => void;
    isLoading?: boolean;
};

export interface MediaUploadState {
    media?: {
        src?: string;
        file?: File;
    };
    isRetake?: boolean;
};

export const MediaUpload = (props: MediaUploadProps) => {

    const [state, setState] = useState<MediaUploadState>({ media: { src: props.mediaSrc } });

    const onAdd = (files: File[]) => {
        if (!files.length) return;
        const file = files[0];

        props.uploadOptions?.onAdd?.([file]);
        setState(prevState => ({
            ...prevState, media: {
                ...prevState.media,
                file: file
            }
        }))

        readFileThenGenerateUrl(file, onObjectUrlCreated);
    };

    const onCapture = async (data: string) => {
        // TODO make a better file name
        const file = dataURLtoFile(data, `promo-image-${Date.now()}.jpeg`);
        setState(prevState => ({
            ...prevState, media: {
                src: data,
                file,
            }
        }))
        onObjectUrlCreated(URL.createObjectURL(file))
    };

    const onObjectUrlCreated = (url: string) => {
        props.onChange?.(url);
        setState(prevState => ({ ...prevState, media: { ...prevState.media, src: url }, isRetake: false }));
    };

    const onVideoRecorded = (videoBlobs: Blob) => {
        setState(prevState => ({
            ...prevState, media: {
                ...prevState.media,
                file: new File([videoBlobs], `recorded-promoVideo.${new Date().getTime()}`, {
                    type: 'video/webm'
                }),
            }
        }))
        onObjectUrlCreated(URL.createObjectURL(videoBlobs));
    };

    const handleRetakeRequest = (event: MouseEvent) => {
        event.stopPropagation();
        setState(prevState => ({ ...prevState, isRetake: true }));
    }

    const handleMediaUpload: MouseEventHandler = useCallback((event) => {
        event.stopPropagation();
        if (!state.media?.file) return;

        props.onUpload?.(state.media?.file)
    }, [props, state.media?.file])



    const Actions = () => <div className={`flex gap-2 p-2`}>
        {state.media?.src ? <Button
            {...props.uploadButton}
            disabled={props.disabled || props.uploadButton?.disabled}
            isLoading={props.isLoading}
            type="button"
            className={`bg-secondary flex-1 ${props.uploadButton?.className ?? ''}`}
            onClick={handleMediaUpload}>
            {props.uploadButton?.children}
        </Button> : null}
        <RetakeButton {...props.retakeButton} type="button"
            disabled={props.disabled || props.retakeButton?.disabled}
            className={`flex-1 ${props.retakeButton?.className ?? ''}`}
            onClick={handleRetakeRequest}>
            {props.retakeButton?.children}
        </RetakeButton>
    </div>;

    const NoImageDropzoneBody = () => {
        return (
            <article>
                <div>
                    {props.uploadOptions?.body ?? `Drag your image here to start uploading.`}
                </div>
                <div className={`mt-10`}>
                    <Actions />
                </div>
            </article>
        );
    };

    const MediaDropzoneBody = useCallback(() => {

        return (
            <>
                {props.mediaBody
                    ? props.mediaBody
                    :
                    <div className={`w-full h-full relative`}>
                        {!props.mode || props.mode === "photo"
                            ? <img className={`w-full h-full`} src={state.media?.src} alt="Uploaded" />
                            : <VideoPlayer url={state.media?.src} width={`100%`} height={`100%`} showPlayButton playButtonPosition="topLeft" />}
                        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2`}>
                            <Actions />
                        </div>
                    </div>}
            </>
        )
    }, [Actions, props.mode, props.mediaBody, state.media?.src]);

    return (
        <div className="row">
            {
                <FileUpload
                    {...DEFAULT_FILE_UPLOAD_OPTIONS}
                    {...props.uploadOptions}
                    disabled={props.disabled || props.uploadOptions?.disabled}
                    onAdd={onAdd}
                    className={`${state.media?.src || state.isRetake ? '!border-none' : ''} ${props.uploadOptions?.className ?? DEFAULT_FILE_UPLOAD_OPTIONS.className ?? ''}`}
                    body={state.isRetake
                        ? <Camera mode={props.mode}
                            onCapture={onCapture}
                            onVideoRecorded={onVideoRecorded} />
                        : !state.media?.src
                            ? <NoImageDropzoneBody />
                            : <MediaDropzoneBody />} />
            }
        </div>
    );
};

const DEFAULT_FILE_UPLOAD_OPTIONS: FileUploadProps = {
    accept: {
        'image/*': []
    },
    maxSize: 50 * 1024 * 1024,
    maxFilesCount: 1,
    multiple: false,
    className: 'aspect-video'
}; 