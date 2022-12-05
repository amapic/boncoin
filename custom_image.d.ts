declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.gif" {
  const content: any;
  export default content;
}

import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      [name in "xs" | "sm" | "md" | "lg" | "xl"]: number;
    };
  }
}
