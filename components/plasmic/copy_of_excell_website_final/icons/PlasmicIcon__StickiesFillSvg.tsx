/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StickiesFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StickiesFillSvgIcon(props: StickiesFillSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"#4A456A"} clipPath={"url(#a)"}>
        <path
          d={
            "M0 2.25V19.5A1.5 1.5 0 0 0 1.5 21V2.25a.75.75 0 0 1 .75-.75H21A1.5 1.5 0 0 0 19.5 0H2.25A2.25 2.25 0 0 0 0 2.25"
          }
        ></path>

        <path
          d={
            "M5.25 3A2.25 2.25 0 0 0 3 5.25v16.5A2.25 2.25 0 0 0 5.25 24h9.129a2.25 2.25 0 0 0 1.59-.66l7.373-7.371a2.25 2.25 0 0 0 .658-1.59V5.25A2.25 2.25 0 0 0 21.75 3zm9 12.75a1.5 1.5 0 0 1 1.5-1.5h6.594a.375.375 0 0 1 .265.64l-7.719 7.72a.374.374 0 0 1-.64-.266z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default StickiesFillSvgIcon;
/* prettier-ignore-end */
