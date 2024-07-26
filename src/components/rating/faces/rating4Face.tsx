import { RatingFaceProps } from "./ratingFaceType";

export function Rating4Face({ isFilled }: RatingFaceProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="70.971" height="68.8" viewBox="0 0 70.971 68.8">
        <g id="Component_1459_2" data-name="Component 1459 – 2" transform="translate(0.75 0.75)">
            <ellipse id="Ellipse_1674" data-name="Ellipse 1674" cx="34.736" cy="33.65" rx="34.736" ry="33.65" fill={`#${isFilled ? '84a59d' : 'fff'}`} stroke="#84a59d" stroke-linecap="round" stroke-width="1.5" />
            <line id="Line_3263" data-name="Line 3263" transform="translate(21.71 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : '84a59d'}`} stroke-linecap="round" stroke-width="3" />
            <line id="Line_3264" data-name="Line 3264" transform="translate(47.762 23.881)" fill="none" stroke={`#${isFilled ? 'fff' : '84a59d'}`} stroke-linecap="round" stroke-width="3" />
            <path id="Path_72684" data-name="Path 72684" d="M38.611,14a16.931,16.931,0,0,1-8.838,8.838,17.168,17.168,0,0,1-13.206,0A16.931,16.931,0,0,1,7.39,14" transform="translate(11.847 27.33)" fill="none" stroke={`#${isFilled ? 'fff' : '84a59d'}`} stroke-linecap="round" stroke-width="1.5" />
        </g>
    </svg>
};