import { MouseEvent, useRef } from "react";
import { UiElementProps } from "../common";
import Webcam from "react-webcam";


export interface CameraProps extends UiElementProps {
    onCapture?: (src: string) => void;
    mode?: 'video' | 'photo';
}

export const Camera = (props: CameraProps) => {

    const webcamRef = useRef<Webcam>(null);

    /** Take user photo */
    const capturePhoto = (event: MouseEvent) => {
        event.stopPropagation();
        const src = webcamRef?.current?.getScreenshot()

        if (!src) return;

        props.onCapture?.(src);
    };

    /** Camera capture click button */
    const CaptureClick = () => {
        return <div className={`w-16 h-16 border-4 border-white border-opacity-80 bg-white bg-opacity-80 transition rounded-full flex justify-center items-center 
        absolute bottom-10 left-1/2 -translate-x-1/2 group hover:bg-opacity-70 hover:border-opacity-60 hover:border-b-transparent hover:border-t-transparent hover:rotate-180 `}>
            <div className={`min-w-[3rem] min-h-[3rem] bg-white rounded-full transition group-hover:min-w-[2.5rem] 
            group-hover:min-h-[2.5rem] hover:hue-rotate-180`}>
            </div>
        </div>
    }

    return (
        <div className={`relative w-full h-full`}>
            <Webcam
                width={`100%`}
                height={`100%`}
                screenshotFormat="image/jpeg"
                ref={webcamRef}
                videoConstraints={VIDEO_CONSTRAINT}
            />
            <button
                onClick={capturePhoto}
            >
                <CaptureClick />
            </button>
        </div >
    );
}

const VIDEO_CONSTRAINT: MediaTrackConstraints = {
    aspectRatio: 16 / 9,
    facingMode: "user",
}