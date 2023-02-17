import StarRatingComponent from 'react-star-rating-component';

export interface RatingStarsProps {
    /**
     * Rating value
     */
    value?: number;
};

export const RatingStar = (props: RatingStarsProps) => {

    return (<StarRatingComponent
        name="rate2"
        editing={false}
        starCount={10}
        value={8}
    />)
}