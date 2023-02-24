import { useState } from "react";
import { UiElementProps } from "../../../../common";
import { ImageProps } from "../../../../image";
import { FileUpload, FileUploadProps } from "../fileUpload";
import { Button, ButtonProps } from "../../../../button";
import { RetakeButton } from "../retakeButton/retakeButton";
import { readFileThenGenerateUrl } from "../helpers";

export interface ImageUpload extends UiElementProps {
    uploadOptions?: FileUploadProps;
    image?: ImageProps;
    uploadButton?: ButtonProps;
    retakeButton?: ButtonProps;
};

export interface UploadImageState {
    src?: string;
};

export const ImageUpload = (props: ImageUpload) => {

    const [state, setState] = useState<UploadImageState>({});

    const onAdd = (files: File[]) => {
        if (!files.length) return;

        const file = files[0];

        readFileThenGenerateUrl(file, onImageLoadToBrowser);
    };

    const onImageLoadToBrowser = (url: string) => {
        setState(prevState => ({ ...prevState, src: url }));
    };

    const Actions = () => <div className={`flex`}>
        <Button className={`bg-secondary flex-1`}>
            {props.uploadButton?.children}
        </Button>
        <RetakeButton className={`flex-1`}>
            {props.retakeButton?.children}
        </RetakeButton>
    </div>;

    const NoImageDropzoneBody = () => {
        return (
            <article>
                <div>
                    {props.uploadOptions?.body ?? `Drag your image here to start uploading.`}
                </div>
                <div className={`mt-5`}>
                    <Actions />
                </div>
            </article>
        );
    };

    const ImageDropzoneBody = () => {

        return (
            <>
                <div className={`w-full h-full relative`}>
                    <img className={`w-full h-full`} src={state.src} alt="Uploaded" />
                    <div className={`absolute bottom-10 left-1/2 -translate-x-1/2`}>
                        <Actions />
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="row">
            <FileUpload
                {...DEFAULT_FILE_UPLOAD_OPTIONS}
                {...FileUpload}
                onAdd={onAdd}
                body={!state.src ? <NoImageDropzoneBody /> : <ImageDropzoneBody />} />
        </div>
    );
};

const DEFAULT_FILE_UPLOAD_OPTIONS: FileUploadProps = {
    accept: {
        'image/*': []
    },
    maxSize: 5 * 1024 * 1024,
    maxFilesCount: 1,
    multiple: false,
    className: 'aspect-video'
}; 