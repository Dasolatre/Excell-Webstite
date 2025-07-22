/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LightningCharge3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LightningCharge3Icon(props: LightningCharge3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#-rGqVt23S3MCa)"}>
        <path
          d={
            "M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09v.001zM4.157 8.5H7a.5.5 0 01.478.647L6.11 13.59l5.732-6.09H9a.5.5 0 01-.478-.647L9.89 2.41 4.157 8.5z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"-rGqVt23S3MCa"}>
          <path fill={"currentColor"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LightningCharge3Icon;
/* prettier-ignore-end */
