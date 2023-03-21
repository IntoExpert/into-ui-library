import StarRatingComponent from 'react-star-rating-component';
import { UiElementProps } from '../../common/uiElement';
import { useState } from 'react';
import { StarIcon, StarIconState } from './starIcon';
import StarsRating from 'react-star-rate';
import { isEditable } from '@testing-library/user-event/dist/utils';

export interface RatingStarsProps extends UiElementProps {
    /**
     * Rating value
     */
    value?: number;
    /**
     * Specify if the user cannot edit and rate using these stars
     */
    disabled?: boolean;
    /**
     * Stars count
     */
    starsCount?: number;
    /**
     * On rate event
     */
    onRate?: (value: number) => void;
    direction?: 'rtl' | 'ltr' | undefined;
    emptyStarColor?: string;
    fontSize?: string;
};

const STARS_COUNT = 5;

/**
 * Shows rating stars
 */
export const RatingStar = (props: RatingStarsProps) => {

    const [state, setState] = useState<{ value: number }>({ value: props.value ?? 0 });

    const handleRating = (value?: number) => {
        props.onRate?.(value ?? 0);
        setState({ value: value ?? 0 });
    };

    return (<span className={`${props.className ?? ''}`}>
        <StarsRating
            count={props.starsCount ?? STARS_COUNT}
            value={state.value}
            onChange={handleRating}
            direction={props.direction ?? 'ltr'}
            disabled={props.disabled}
            style={{
                style: {
                    fontSize: props.fontSize ?? '18px'
                },
                full: {
                    star: {
                        color: '#FDB901 !important'
                    }
                },
                half: {
                    star: {
                        color: '#FDB901 !important'
                    }
                },
                zero: {
                    star: {
                        color: props.emptyStarColor
                    }
                }

            }}
        />
    </span>)
}