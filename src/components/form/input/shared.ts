import { UiElementSize } from "../../common";

export const inputHeightClassBySize = (size?: UiElementSize) => {
  switch (size) {
    case "xs": {
      return `h-28`;
    }
    case "sm": {
      return `h-32`;
    }
    case "md": {
      return `h-36`;
    }
    case "lg": {
      return `h-40`;
    }
    case "xl": {
      return `h-44`;
    }

    default:
      return "h-48";
  }
};
