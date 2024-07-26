import { RatingFaceProps } from "./ratingFaceType";

export function Rating3Face({ isFilled }: RatingFaceProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="68.801" height="68.8" viewBox="0 0 68.801 68.8">
        <g id="Component_1461_2" data-name="Component 1461 – 2" transform="translate(0.75 0.75)">
            <ellipse id="Ellipse_1670" data-name="Ellipse 1670" cx="33.65" cy="33.65" rx="33.65" ry="33.65" fill={`#${isFilled ? 'f5cac3' : 'fff'}`} stroke="#f5cac3" stroke-linecap="round" stroke-width="1.5" />
            <line id="Line_3258" data-name="Line 3258" transform="translate(19.539 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : 'f5cac3'}`} stroke-linecap="round" stroke-width="3" />
            <line id="Line_3259" data-name="Line 3259" transform="translate(47.762 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : 'f5cac3'}`} stroke-linecap="round" stroke-width="3" />
            <line id="Line_3260" data-name="Line 3260" x2="32.565" transform="translate(17.368 45.59)" fill="none" stroke={`#${isFilled ? 'fff' : 'f5cac3'}`} stroke-linecap="round" stroke-width="1.5" />
        </g>
    </svg>
};