import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        bgColor : string;
        textColor : string;
        empTxtColor : string;      // 강조 색상
        boxColor : string;         // 박스 색상
    }
}