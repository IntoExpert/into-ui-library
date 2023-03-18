import { MouseEvent, MouseEventHandler, useCallback, useState } from "react";
import { UiElementProps } from "../../../../common";
import { ImageProps } from "../../../../image";
import { FileUpload, FileUploadProps } from "../fileUpload";
import { Button, ButtonProps } from "../../../../button";
import { RetakeButton } from "../retakeButton/retakeButton";
import { readFileThenGenerateUrl } from "../helpers";
import { Camera } from "../../../../camera/camera";
import { VideoPlayer } from "../../../../video";

export interface MediaUploadProps extends UiElementProps {
    uploadOptions?: FileUploadProps;
    image?: ImageProps;
    uploadButton?: ButtonProps;
    retakeButton?: ButtonProps;
    mode?: "photo" | "video";
    onUpload?: (file: File) => void;
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

    const [state, setState] = useState<MediaUploadState>({});

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

    const onObjectUrlCreated = (url: string) => {

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



    const Actions = () => <div className={`flex gap-2`}>
        <Button isLoading={props.isLoading} type="button" className={`bg-secondary flex-1`} onClick={handleMediaUpload}>
            {props.uploadButton?.children}
        </Button>
        <RetakeButton type="button" className={`flex-1`} onClick={handleRetakeRequest}>
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

    const MediaDropzoneBody = () => {

        return (
            <>
                <div className={`w-full h-full relative`}>
                    {!props.mode || props.mode === "photo"
                        ? <img className={`w-full h-full`} src={state.media?.src} alt="Uploaded" />
                        : <VideoPlayer url={state.media?.src} width={`100%`} height={`100%`} showPlayButton />}
                    <div className={`absolute bottom-10 left-1/2 -translate-x-1/2`}>
                        <Actions />
                    </div>
                </div>
            </>
        )
    };

    return (
        <div className="row">
            {
                <FileUpload
                    {...DEFAULT_FILE_UPLOAD_OPTIONS}
                    {...props.uploadOptions}
                    onAdd={onAdd}
                    className={`${state.media?.src || state.isRetake ? '!border-none' : ''} ${props.uploadOptions?.className ?? DEFAULT_FILE_UPLOAD_OPTIONS.className ?? ''}`}
                    body={state.isRetake
                        ? <Camera mode={props.mode}
                            onCapture={onObjectUrlCreated}
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