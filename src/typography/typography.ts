import styled from "styled-components";

export enum FontWeight {
  UltraThin = "100",
  ExtraLight = "200",
  Light = "300",
  Regular = "400",
  Medium = "500",
  SemiBold = "600",
  Bold = "700",
  ExtraBold = "800",
  UltraBold = "900",
  Inherit = "inherit"
}

export enum FontSize {
  ExtraSmall = "8px",
  Small = "10px",
  Medium = "12px",
  Regular = "14px",
  Large = "16px",
  ExtraLarge = "18px",
  XXL = "20px",
  XXXL = "24px",
  Huge = "30px",
  Giant = "36px",
  Inherit = "inherit"
}

type TypographyPropsType = {
  color?: string
  fontWeight?: FontWeight
  fontSize?: FontSize
  fontFamily?: string
}


export const Typography = styled('p')<TypographyPropsType>`
  color: ${props => props.color || '#fff' };
  font-size: ${props => props.fontSize || FontSize.Regular};
  font-weight: ${props => props.fontWeight || FontWeight.Regular};
  font-family: ${props => props.fontFamily || "JetBrains Mono"};
`