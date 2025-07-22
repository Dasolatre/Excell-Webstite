/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckCircleFill1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckCircleFill1SvgIcon(props: CheckCircleFill1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#if-93MLJ0Sa1a)"}>
        <path
          d={
            "M24 12a12 12 0 11-24 0 12 12 0 0124 0zm-5.955-4.545a1.124 1.124 0 00-1.62.033l-5.21 6.638-3.139-3.141a1.125 1.125 0 00-1.59 1.59l3.969 3.97a1.125 1.125 0 001.618-.03l5.988-7.485a1.125 1.125 0 00-.014-1.575h-.002z"
          }
          fill={"#235936"}
        ></path>
      </g>

      <defs>
        <clipPath id={"if-93MLJ0Sa1a"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CheckCircleFill1SvgIcon;
/* prettier-ignore-end */
