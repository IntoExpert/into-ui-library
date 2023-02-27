import { ImageProps } from "../image";
import { Card, CardProps } from "./card";

export interface MediaCardProps extends CardProps {
    media: ImageProps;
};

export const MediaCard = ({ media, children, className }: MediaCardProps) => {

    return (
        <Card className={`${className ?? ''}`}>
            <div>
                <div className={``}>
                    <img {...media}
                        alt={media.alt ?? ''}
                        className={`w-full aspect-video object-cover ${className ?? ''}`}></img>
                </div>
                {children}
            </div>
        </Card>
    );
}