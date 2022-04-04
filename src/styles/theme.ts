import { css, Theme } from "styled-components";

export const theme: Theme = {
  color: {
    red: "salmon",
    blue: "skyblue",
  },
  utils: {
    grid__center: css`
      display: grid;
      place-items: center;
    `,
  },
};
