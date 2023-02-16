import { useCallback } from "react";
import { useDropzone, FileRejection } from 'react-dropzone'

export interface FileUploadProps {
    /**
     * Body of the drop zone
     */
    body?: JSX.Element | string | undefined;
    /**
     * Content that shows when a file is able to be dropped on the drop zone
     */
    onDropAvailableContent?: JSX.Element | string | undefined;
    /**
     * List of accepted file types, the map key is to specify the file type, and the associated array is to specify extensions, empty array means that, accept all files that have the same type
     */
    accept?: { [key: string]: Array<string> };
    /**
     * Handle files dropped or added by user
     */
    onAdd?: (files: Array<File>) => void;
    /**
     * On files rejected event to handle rejected files
     */
    onFilesRejected?: (rejections: FileRejection[]) => void;
};

export const FileUpload = (props: FileUploadProps) => {

    const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
        debugger;

        if (acceptedFiles?.length) props.onAdd?.(acceptedFiles);

        if (fileRejections?.length) props.onFilesRejected?.(fileRejections);
    }, []);

    const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({ onDrop, accept: props.accept });

    return (
        <div {...getRootProps({
            className: "p-5 border-2 border-dashed border-primary rounded-md"
        })}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    (props.onDropAvailableContent || <p>Drop the files here ...</p>) :
                    (props.body || <p>Drag 'n' drop some files here, or click to select files</p>)
            }
        </div>
    )
};