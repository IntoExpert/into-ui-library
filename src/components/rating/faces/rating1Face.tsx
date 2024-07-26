import { RatingFaceProps } from "./ratingFaceType";

export function Rating1Face({ isFilled }: RatingFaceProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="69.225" height="69.225" viewBox="0 0 69.225 69.225">
        <g id="Component_1462_2" data-name="Component 1462 – 2" transform="translate(0.75 0.75)">
            <path id="Path_72681" data-name="Path 72681" d="M35.862,2A33.862,33.862,0,1,0,69.725,35.862,33.862,33.862,0,0,0,35.862,2Z" transform="translate(-2 -2)" fill={`#${isFilled ? 'f28482' : 'fff'}`} stroke="#f28482" stroke-linecap="round" stroke-width="1.5" />
            <line id="Line_3256" data-name="Line 3256" transform="translate(20.887 23.186)" fill="none" stroke={`#${isFilled ? 'fff' : 'f28482'}`} stroke-linecap="round" stroke-width="3" />
            <line id="Line_3257" data-name="Line 3257" transform="translate(46.939 23.186)" fill="none" stroke={`#${isFilled ? 'fff' : 'f28482'}`} stroke-linecap="round" stroke-width="3" />
            <path id="Path_72682" data-name="Path 72682" d="M0,0H40.635S37.249,16.931,20.317,16.931,0,0,0,0Z" transform="translate(54.177 50.793) rotate(180)" fill="#fff" stroke="#f28482" stroke-linecap="round" stroke-width="1.5" />
        </g>
    </svg>
};