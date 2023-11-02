import React from "react";
import { useLottie } from "lottie-react";
import rocketLottieFile from "./rocket-lottie.json";

export const AnimatedRocket = () => {
    const options = {
        animationData: rocketLottieFile,
        loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};