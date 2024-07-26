import { DateTime } from "luxon";
import { Card } from "../../card";
import { getRatingFaceByRating } from "../faces/ratingFaces";
import { EditIcon } from "../../icons";

export interface schoolReviewCardProps {
    rating?: number;
    date?: DateTime;
    description?: string;
    isEditable?: boolean;
    onEdit?: () => void;
}

export function SchoolReviewCard({ rating = 1, date, description, isEditable, onEdit }: schoolReviewCardProps) {

    const RatingFace = getRatingFaceByRating(rating);

    return <Card className={`relative p-8`}>
        <>
            {isEditable ? <div className="absolute top-2 right-2">
                <button title="Edit" type="button" className="px-0.5" onClick={onEdit}><EditIcon /></button>
            </div> : null}
            <div className="flex gap-8">
                <div className="inline-flex items-center">
                    <RatingFace isFilled />
                </div>
                <div>
                    <p className={`text-xs text-gray-400`}>{date?.toLocaleString({ dateStyle: 'medium' })}</p>
                    <p className="text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </>
    </Card>
}