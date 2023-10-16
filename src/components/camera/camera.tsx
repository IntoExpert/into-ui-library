import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { UiElementProps } from "../common";
import Webcam from "react-webcam";


export interface CameraProps extends UiElementProps {
    onCapture?: (src: string) => void;
    onVideoRecorded?: (blob: Blob) => void;
    mode?: 'video' | 'photo';
    webcamProps?: WebcamProps
    cameraCaptureButtonClassName?: string;
    onMediaError?: (error: string | DOMException) => void
}

export interface WebcamProps {
    audio?: boolean;
    audioConstraints?: MediaStreamConstraints["audio"];
    forceScreenshotSourceSize?: boolean;
    imageSmoothing?: boolean;
    mirrored?: boolean;
    minScreenshotHeight?: number;
    minScreenshotWidth?: number;
    onUserMedia?: (stream: MediaStream) => void;
    onUserMediaError?: (error: string | DOMException) => void;
    screenshotFormat?: "image/webp" | "image/png" | "image/jpeg";
    screenshotQuality?: number;
    videoConstraints?: MediaStreamConstraints["video"];
}

export const Camera = (props: CameraProps) => {

    const webcamRef = useRef<Webcam>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [capturing, setCapturing] = useState(false);
    const [startedCapturing, setStartedCapturing] = useState(false);
    const [showCapture, setShowCapture] = useState(false);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

    useEffect(() => {
        if (capturing || !startedCapturing || !recordedChunks.length) return;

        props.onVideoRecorded?.(new Blob(recordedChunks, { type: 'video/webm' }));
    }, [recordedChunks, capturing, props, startedCapturing]);

    /** 
     * Take user photo 
     */
    const capturePhoto = (event: MouseEvent) => {
        event.stopPropagation();
        const src = webcamRef?.current?.getScreenshot()

        if (!src) return;

        props.onCapture?.(src);
    };

    /**
     * Handle data after stop video recording
     */
    const handleDataAvailable = useCallback(
        ({ data }: any) => {
            if (data.size > 0) {
                console.info(`Recorded chunk size ${data.size}`);
                setRecordedChunks(prev => prev.concat(data));
            }
        }, []
    );

    /**
     * Start video recording
     */
    const handleStartCaptureClick = useCallback((event: MouseEvent) => {
        setStartedCapturing(true);
        event.stopPropagation();
        setCapturing(true);

        mediaRecorderRef.current = new MediaRecorder(webcamRef.current?.stream!, {
            mimeType: "video/webm"
        });
        mediaRecorderRef?.current?.addEventListener(
            "dataavailable",
            handleDataAvailable
        );

        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

    /**
     *  Handle stop video recording
     */
    const handleStopCaptureClick = useCallback((event: MouseEvent) => {
        event.stopPropagation();
        mediaRecorderRef?.current?.stop();
        setCapturing(false);
    }, [mediaRecorderRef, setCapturing]);

    /** Camera capture click button */
    const CaptureClick = () => {
        return props.mode === "video"
            ? (
                <div className={`${props.cameraCaptureButtonClassName} w-[2rem] h-[2rem] border-4 
                border-white border-opacity-80 bg-opacity-80 transition rounded-full 
                    flex justify-center items-center group hover:bg-opacity-70 
                    hover:border-opacity-60 hover:scale-95`}>
                    <div className={` bg-red-500 transition 
                    ${capturing ? 'min-w-[1rem] min-h-[1rem] rounded animate-pulse' : 'min-w-[1rem] min-h-[1rem] rounded-full'}`}>
                    </div>
                </div>
            )
            : (
                <div className={`${props.cameraCaptureButtonClassName} w-[2rem] h-[2rem] border-2 border-white border-opacity-80 bg-white bg-opacity-80 transition rounded-full flex justify-center items-center
                         group hover:bg-opacity-70 hover:border-opacity-60 hover:border-b-transparent hover:border-t-transparent hover:rotate-180 `}>
                    <div className={`min-w-[1.5rem] min-h-[1.5rem] bg-white rounded-full transition group-hover:min-w-[1.2rem] 
            group-hover:min-h-[1.2rem] hover:hue-rotate-180`}>
                    </div>
                </div>
            );
    }

    return (
        <div className={`relative w-full h-full`}>
            <Webcam
                width={`100%`}
                height={`100%`}
                screenshotFormat="image/jpeg"
                ref={webcamRef}
                videoConstraints={VIDEO_CONSTRAINT}
                onUserMedia={() => setShowCapture(true)}
                audioConstraints={{
                    noiseSuppression: true,
                    echoCancellation: true,
                    sampleRate: 144100
                }}
                audio={props.mode === "video"}
                muted={true}
                {...props.webcamProps}
            />
            {showCapture ? <button
                type="button"
                title="Upload"
                className={`absolute left-1/2 -translate-x-1/2 bottom-4`}
                onClick={props.mode === "video" ?
                    (!capturing ? handleStartCaptureClick : handleStopCaptureClick) :
                    capturePhoto}
            >
                <CaptureClick />
            </button> : null}
        </div >
    );
}

const VIDEO_CONSTRAINT: MediaTrackConstraints = {
    aspectRatio: 16 / 9,
    facingMode: "user",

}