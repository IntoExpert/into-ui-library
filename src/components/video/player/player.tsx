import { UiElementProps } from "../../common";
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { PlayIcon } from "../../icons";
import { useCallback, useState } from "react";
import { PauseIcon } from "../../icons/pauseIcon/pauseIcon";

export interface VideoPlayerProps extends UiElementProps, ReactPlayerProps {
    showPlayButton?: boolean;
    playButtonPosition?: 'topLeft' | 'topRight' | 'center';
};

export const VideoPlayer = ({ showPlayButton, playButtonPosition, ...props }: VideoPlayerProps) => {
    const [play, setPlay] = useState(false);

    const handlePlayButtonToggle = useCallback(() =>
        setPlay(!play)
        , [play])
    return (
        <div className={`relative`}>
            <ReactPlayer {...props} playing={showPlayButton ? play : props.playing} />
            {showPlayButton
                ? <span
                    onClick={handlePlayButtonToggle}
                    className={`absolute 
                        ${playButtonPosition?.startsWith('top') ? 'top-1' : ''}
                        ${playButtonPosition?.toLowerCase().includes('right') ? 'right-1' : ''}
                        ${playButtonPosition?.toLowerCase().includes('left') ? 'left-1' : ''}
                        ${playButtonPosition === 'center' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
                        transition-all hover:shadow hover:scale-105 cursor-pointer
                        `}>
                    {!play ? <PlayIcon className={`fill-surface`} /> : <PauseIcon className={`fill-surface`} />}
                </span>
                : null}
        </div>
    );
}