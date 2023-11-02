import React from "react";
import { useLottie } from "lottie-react";
import commingSoonOptions from "./commingSoon.json";

export const CommingSoon = () => {
  const options = {
    animationData: commingSoonOptions,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};
