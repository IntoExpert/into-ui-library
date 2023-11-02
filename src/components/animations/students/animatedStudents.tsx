import { useLottie } from "lottie-react"
import lottieOptions from "./students-lottie.json";

export const AnimatedStudents = () => {

    const { View, } = useLottie({
        animationData: lottieOptions,
        loop: true,
    });

    return <>{View}</>
}