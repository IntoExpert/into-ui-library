import React from "react";
import { useLottie } from "lottie-react";
import confettiOptions from "./confetti-animation.json";

export const AnimatedConfetti = () => {
    const options = {
        animationData: confettiOptions,
        loop: true
    };

    const { View } = useLottie(options);

    return <>{View}</>;
};