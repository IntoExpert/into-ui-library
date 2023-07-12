import { UiElementSize } from "../../common";

export const inputHeightClassDurToSize = (size?: UiElementSize) => {
  switch (size) {
    case "xs": {
      return `h-8`;
    }
    case "sm": {
      return `h-10`;
    }
    case "md": {
      return `h-12`;
    }
    case "lg": {
      return `h-14`;
    }
    case "xl": {
      return `h-16`;
    }

    default:
      return "h-14";
  }
};
