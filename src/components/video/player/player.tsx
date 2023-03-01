import { UiElementProps } from "../../common";
import ReactPlayer, { ReactPlayerProps } from 'react-player'

export interface VideoPlayerProps extends UiElementProps, ReactPlayerProps {

};

export const VideoPlayer = (props: VideoPlayerProps) => {

    return (
        <ReactPlayer {...props} />
    );
}