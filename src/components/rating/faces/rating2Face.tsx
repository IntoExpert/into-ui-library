import { RatingFaceProps } from "./ratingFaceType";

export function Rating2Face({ isFilled }: RatingFaceProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="68.801" height="68.8" viewBox="0 0 68.801 68.8">
        <g id="Component_1460_2" data-name="Component 1460 – 2" transform="translate(0.75 0.75)">
            <ellipse id="Ellipse_1672" data-name="Ellipse 1672" cx="33.65" cy="33.65" rx="33.65" ry="33.65" fill={`#${isFilled ? 'f6bd60' : 'fff'}`} stroke="#f6bd60" stroke-linecap="round" stroke-width="1.5" />
            <line id="Line_3261" data-name="Line 3261" transform="translate(19.539 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : 'f6bd60'}`} stroke-linecap="round" stroke-width="3" />
            <line id="Line_3262" data-name="Line 3262" transform="translate(47.762 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : 'f6bd60'}`} stroke-linecap="round" stroke-width="3" />
            <path id="Path_72683" data-name="Path 72683" d="M7.39,23.328A16.931,16.931,0,0,1,16.4,14.321a17.168,17.168,0,0,1,13.206,0,16.931,16.931,0,0,1,9.007,9.007" transform="translate(10.689 24.945)" fill="none" stroke={`#${isFilled ? 'fff' : 'f6bd60'}`} stroke-linecap="round" stroke-width="1.5" />
        </g>
    </svg>
};