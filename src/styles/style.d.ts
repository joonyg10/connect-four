// TS 파일에 대해 타입 추론을 도와주는 파일 .d.ts

import "styled-components";

declare module "styled-components" {
  export interface Theme {
    color: {
      red: "salmon";
      blue: "skyblue";
    };
    utils: {
      grid__center: FlattenSimpleInterpolation;
    };
  }
}
