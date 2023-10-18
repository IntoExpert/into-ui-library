import { UiElementProps } from "../../common";
import ReactPlayer, { ReactPlayerProps } from 'react-player'
import { PlayIcon } from "../../icons";
import { MouseEvent, ReactNode, useCallback, useEffect, useState } from "react";
import { PauseIcon } from "../../icons/pauseIcon/pauseIcon";

export interface VideoPlayerProps extends UiElementProps, ReactPlayerProps {
    showPlayButton?: boolean;
    playButtonPosition?: 'topLeft' | 'topRight' | 'center';
};

export const VideoPlayer = ({ showPlayButton = false, playButtonPosition = 'center', className = '', ...props }: VideoPlayerProps) => {
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
        <div className={`relative ${className} ${play ? '[&>button]:opacity-0 [&>button]:hover:opacity-100' : ''}`}>
            <ReactPlayer
                wrapper={({ children }: { children: ReactNode }) => <div className={`w-full`}>{children}</div>}
                {...props}
                onEnded={() => {
                    setPlay(false)
                    props.onEnded?.();
                }}
                playing={showPlayButton ? play : props.playing} />
            {showPlayButton
                ? <button
                    type="button"
                    onClick={handlePlayButtonToggle}
                    className={`absolute
                        ${playButtonPosition?.startsWith('top') ? 'top-2' : ''}
                        ${playButtonPosition?.toLowerCase().includes('right') ? 'right-2' : ''}
                        ${playButtonPosition?.toLowerCase().includes('left') ? 'left-2' : ''}
                        ${playButtonPosition === 'center' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
                        transition-all hover:shadow hover:scale-110 cursor-pointer rounded-full`}>
                    {!play ? <PlayIcon className={`fill-surface rounded-full`} /> : <PauseIcon className={`fill-surface`} />}
                </button>
                : null}
        </div>
    );
}