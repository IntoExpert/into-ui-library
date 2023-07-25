import { UiElementProps } from "../../common";
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { PlayIcon } from "../../icons";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { PauseIcon } from "../../icons/pauseIcon/pauseIcon";

export interface VideoPlayerProps extends UiElementProps, ReactPlayerProps {
    showPlayButton?: boolean;
    playButtonPosition?: 'topLeft' | 'topRight' | 'center';
};

export const VideoPlayer = ({ showPlayButton = false, playButtonPosition = 'center', className, ...props }: VideoPlayerProps) => {
    const [play, setPlay] = useState(false);

    const handlePlayButtonToggle = useCallback((e: MouseEvent) => {
        e.stopPropagation();
        setPlay(!play)
    }
        , [play]);

    useEffect(() => {
        setPlay(!!props.playing);
    }, [props.playing]);

    return (
        <div className={`relative`}>
            <ReactPlayer
                {...props}
                playing={showPlayButton ? play : props.playing} />
            {showPlayButton
                ? <span
                    onClick={handlePlayButtonToggle}
                    className={`absolute 
                        ${playButtonPosition?.startsWith('top') ? 'top-2' : ''}
                        ${playButtonPosition?.toLowerCase().includes('right') ? 'right-2' : ''}
                        ${playButtonPosition?.toLowerCase().includes('left') ? 'left-2' : ''}
                        ${playButtonPosition === 'center' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
                        transition-all hover:shadow hover:scale-105 cursor-pointer rounded-full ${className}`}>
                    {!play ? <PlayIcon className={`fill-surface rounded-full`} /> : <PauseIcon className={`fill-surface`} />}
                </span>
                : null}
        </div>
    );
}