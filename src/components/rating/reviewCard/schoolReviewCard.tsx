import { DateTime } from "luxon";
import { Card } from "../../card";
import { getRatingFaceByRating } from "../faces/ratingFaces";

export interface schoolReviewCardProps {
    rating?: number;
    date?: DateTime;
    description?: string;
}

export function SchoolReviewCard({ rating = 1, date, description }: schoolReviewCardProps) {

    const RatingFace = getRatingFaceByRating(rating);

    return <Card className={`p-4`}>
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
    </Card>
}