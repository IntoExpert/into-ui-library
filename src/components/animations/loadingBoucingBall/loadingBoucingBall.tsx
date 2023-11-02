import { useLottie } from "lottie-react";
import confettiOptions from "./LoadingBouncingBall.json";

export const LoadingBouncingBall = () => {
  const options = {
    animationData: confettiOptions,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};
