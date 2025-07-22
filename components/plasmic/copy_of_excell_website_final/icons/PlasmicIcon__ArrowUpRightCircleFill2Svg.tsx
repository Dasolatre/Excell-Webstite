/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowUpRightCircleFill2SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ArrowUpRightCircleFill2SvgIcon(
  props: ArrowUpRightCircleFill2SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 24 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <path
          fill={"#3E8B56"}
          d={
            "M0 12.5a12 12 0 1 0 24 0 12 12 0 0 0-24 0m8.856 4.204a.75.75 0 1 1-1.06-1.06L13.94 9.5H9.788a.75.75 0 0 1 0-1.5h5.962a.75.75 0 0 1 .75.75v5.963a.75.75 0 1 1-1.5 0V10.56z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 .5h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ArrowUpRightCircleFill2SvgIcon;
/* prettier-ignore-end */
