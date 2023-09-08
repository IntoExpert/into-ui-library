import { MouseEvent, MouseEventHandler, ReactElement, forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { UiElementProps } from "../../../../common";
import { FileInputRefType, FileUpload, FileUploadProps } from "../fileUpload";
import { Button, ButtonProps } from "../../../../button";
import { RetakeButton } from "../retakeButton/retakeButton";
import { readFileThenGenerateUrl } from "../helpers";
import { Camera, CameraProps } from "../../../../camera/camera";
import { VideoPlayer } from "../../../../video";
import { dataURLtoFile } from "../../../../lib/files";
import { PDFIcon } from "../../../../icons";

export interface MediaUploadProps extends UiElementProps {
    disabled?: boolean;
    uploadOptions?: FileUploadProps;
    mediaSrc?: string;
    mediaBody?: ReactElement | string
    uploadButton?: ButtonProps;
    retakeButton?: ButtonProps;
    mode?: "photo" | "video";
    onUpload?: (file: File) => void;
    onChange?: (url: string, file: File) => void;
    isLoading?: boolean;
    camera?: CameraProps;
};

export interface MediaUploadState {
    media?: {
        src?: string;
        file?: File;
    };
    isRetake?: boolean;
};

export const MediaUpload = forwardRef<FileInputRefType, MediaUploadProps>(({ onUpload, onChange, disabled, isLoading,
    className, uploadButton, retakeButton, ...props }: MediaUploadProps, ref) => {

    const [state, setState] = useState<MediaUploadState>({ media: { src: props.mediaSrc } });

    const onObjectUrlCreated = useCallback((url: string, file: File) => {
        onChange?.(url, file);
        setState(prevState => ({ ...prevState, media: { file, src: url }, isRetake: false }));
    }, [onChange]);

    const onCapture = useCallback((data: string) => {
        const file = dataURLtoFile(data, `captured-image-${Date.now()}.jpeg`);

        onObjectUrlCreated(URL.createObjectURL(file), file)
    }, [onObjectUrlCreated]);

    const onAdd = useCallback((files: File[]) => {
        if (!files.length) return;
        const file = files[0];

        props.uploadOptions?.onAdd?.([file]);

        readFileThenGenerateUrl(file, (url) => onObjectUrlCreated(url, file));
    }, [props.uploadOptions, onObjectUrlCreated]);

    const onVideoRecorded = useCallback((videoBlobs: Blob) => {
        const file = new File([videoBlobs], `recorded-promoVideo.${new Date().getTime()}`, {
            type: 'video/webm'
        });

        onObjectUrlCreated(URL.createObjectURL(videoBlobs), file);

    }, [onObjectUrlCreated]);

    const handleRetakeRequest = useCallback((event: MouseEvent) => {
        event.stopPropagation();
        setState(prevState => ({ ...prevState, isRetake: true }));
    }, []);

    const handleMediaUpload: MouseEventHandler = useCallback((event) => {
        event.stopPropagation();
        if (!state.media?.file) return;

        onUpload?.(state.media?.file)
    }, [onUpload, state.media?.file])

    const Actions = useCallback(() => <div className={`flex gap-2 p-2`}>
        {state.media?.src ? props.uploadOptions
            ? <Button
                {...uploadButton}
                disabled={disabled || uploadButton?.disabled}
                isLoading={isLoading}
                type="button"
                className={`bg-secondary flex-1 ${uploadButton?.className ?? ''}`}
                onClick={handleMediaUpload}>
                {uploadButton?.children}
            </Button> : null
            : null}
        {retakeButton ? <RetakeButton {...retakeButton} type="button"
            disabled={disabled || retakeButton?.disabled}
            className={`flex-1 ${retakeButton?.className ?? ''}`}
            onClick={handleRetakeRequest}>
            {retakeButton?.children}
        </RetakeButton> : null}
    </div>, [uploadButton, retakeButton, isLoading, disabled, handleMediaUpload, state.media?.src, props.uploadOptions, handleRetakeRequest]);

    const NoImageDropzoneBody = useCallback(() => {
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
    }, [Actions, props.uploadOptions?.body]);

    const fileExtension = useMemo(() => state.media?.file?.name.split('.')[state.media?.file?.name.length - 1],
        [state.media?.file?.name]);

    const MediaDropzoneBody = useCallback(() => {

        return (
            <>
                {props.mediaBody
                    ? props.mediaBody
                    : <div className={`w-full h-full relative`}>
                        {!props.mode || props.mode === "photo"
                            ? fileExtension === "pdf"
                                ? <div className={`flex justify-center items-center`}><PDFIcon /></div>
                                : <img className={`w-full h-full`} src={state.media?.src} alt="Uploaded" />
                            : <VideoPlayer url={state.media?.src} width={`100%`} height={`100%`}
                                showPlayButton playButtonPosition="topLeft" />}
                        <div className={`absolute bottom-[5%] left-1/2 -translate-x-1/2`}>
                            <Actions />
                        </div>
                    </div>}
            </>
        )
    }, [Actions, props.mode, props.mediaBody, fileExtension, state.media?.src]);

    const body = useMemo(() => state.isRetake
        ? <Camera
            mode={props.mode}
            onCapture={onCapture}
            onVideoRecorded={onVideoRecorded}
            {...props.camera} />
        : !state.media?.src
            ? <NoImageDropzoneBody />
            : <MediaDropzoneBody />,
        [MediaDropzoneBody, NoImageDropzoneBody, onCapture, onVideoRecorded, props.mode, props.camera, state.isRetake, state.media?.src]);

    useEffect(() => {
        setState(prevState => ({
            ...prevState, media: {
                ...prevState,
                src: props.mediaSrc,
            }
        }))
    }, [props.mediaSrc]);

    return (
        <div className={`row ${className}`}>

            <FileUpload
                {...DEFAULT_FILE_UPLOAD_OPTIONS}
                {...props.uploadOptions}
                ref={ref}
                disabled={disabled || props.uploadOptions?.disabled}
                onAdd={onAdd}
                className={`${state.media?.src || state.isRetake ? '!border-none' : ''} 
                        ${props.uploadOptions?.className ?? DEFAULT_FILE_UPLOAD_OPTIONS.className ?? ''}`}
                body={body} />

        </div>
    );
});

const DEFAULT_FILE_UPLOAD_OPTIONS: FileUploadProps = {
    accept: {
        'image/*': []
    },
    maxSize: 50 * 1024 * 1024,
    maxFilesCount: 1,
    multiple: false,
    className: 'aspect-video'
};

MediaUpload.displayName = "MediaUpload";