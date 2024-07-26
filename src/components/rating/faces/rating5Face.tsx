import { RatingFaceProps } from "./ratingFaceType";

export function Rating5Face({ isFilled }: RatingFaceProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="68.801" height="68.8" viewBox="0 0 68.801 68.8">
        <g id="Component_1458_1" data-name="Component 1458 – 1" transform="translate(0.75 0.75)">
            <ellipse id="Ellipse_1668" data-name="Ellipse 1668" cx="33.65" cy="33.65" rx="33.65" ry="33.65" fill={`#${isFilled ? '3f94f3' : 'fff'}`} stroke="#3f94f3" stroke-linecap="round" stroke-width="1.5" />
            <line id="Line_3256" data-name="Line 3256" transform="translate(19.539 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : '3f94f3'}`} stroke-linecap="round" stroke-width="3" />
            <line id="Line_3257" data-name="Line 3257" transform="translate(47.762 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : '3f94f3'}`} stroke-linecap="round" stroke-width="3" />
            <path id="Path_72682" data-name="Path 72682" d="M6,13H46.635S43.249,29.931,26.317,29.931,6,13,6,13Z" transform="translate(6.814 24.945)" fill="#fff" stroke="#3f94f3" stroke-linecap="round" stroke-width="1.5" />
        </g>
    </svg>
};