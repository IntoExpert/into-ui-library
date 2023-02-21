import StarRatingComponent from 'react-star-rating-component';
import { UiElementProps } from '../../common/uiElement';
import { useState } from 'react';
import { StarIcon, StarIconState } from './starIcon';

export interface RatingStarsProps extends UiElementProps {
    /**
     * Rating value
     */
    value?: number;
    /**
     * Specify if the user can edit and rate using these stars
     */
    isEditable?: boolean;
    /**
     * Stars count
     */
    starsCount?: number;
    /**
     * On rate event
     */
    onRate?: (value: number) => void;
};

const STARS_COUNT = 5;

/**
 * Shows rating stars
 */
export const RatingStar = (props: RatingStarsProps) => {

    const [state, setState] = useState<{ value: number }>({ value: props.value ?? 0 });

    const handleRating = (value: number) => {
        props.onRate?.(value);
        setState({ value });
    };

    const renderStars = (ratingValue: number, starIndex: number, name: string) => {
        let state = StarIconState.Empty;
        if (starIndex >= ratingValue) {

            if (starIndex < ratingValue + 0.5) {
                state = StarIconState.Full;
            }
            else {
                state = StarIconState.Full;
            }
        }
        return <span><StarIcon state={state} size={`24px`} /></span>
    };

    return (<StarRatingComponent
        name="rate2"
        editing={props.isEditable}
        starCount={props.starsCount ?? STARS_COUNT}
        value={state.value}
        onStarClick={handleRating}
        renderStarIcon={renderStars}
    />)
}