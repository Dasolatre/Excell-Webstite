/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2SvgIcon(props: Vector2SvgIconProps) {
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

      <path
        fill={"currentColor"}
        d={
          "M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0m-5.955-4.545a1.124 1.124 0 0 0-1.62.033l-5.21 6.638-3.139-3.141a1.125 1.125 0 0 0-1.59 1.59l3.969 3.97a1.125 1.125 0 0 0 1.618-.03l5.988-7.485a1.125 1.125 0 0 0-.014-1.575z"
        }
      ></path>
    </svg>
  );
}

export default Vector2SvgIcon;
/* prettier-ignore-end */
