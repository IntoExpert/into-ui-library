import { Rating1Face } from "./rating1Face";
import { Rating2Face } from "./rating2Face";
import { Rating3Face } from "./rating3Face";
import { Rating4Face } from "./rating4Face";
import { Rating5Face } from "./rating5Face";

export function getRatingFaceByRating(rating: number) {

    if (rating < 2) {
        return Rating1Face
    }

    if (rating < 3) {
        return Rating2Face
    }

    if (rating < 4) {
        return Rating3Face
    }

    if (rating < 5) {
        return Rating4Face
    }

    return Rating5Face
}