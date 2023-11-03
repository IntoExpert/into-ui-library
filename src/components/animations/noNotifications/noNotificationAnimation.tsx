import { useLottie } from "lottie-react";
import confettiOptions from "./no-notifications-lotties.json";

export const NoNotificationAnimation = () => {
  const options = {
    animationData: confettiOptions,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};
