/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _12394401IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _12394401Icon(props: _12394401IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.293 2.667H4.707a1.933 1.933 0 00-1.96 1.906v22.854a1.933 1.933 0 001.96 1.906h22.586a1.932 1.932 0 001.96-1.906V4.573a1.932 1.932 0 00-1.96-1.906zm-16.506 22.32h-4v-12h4v12zm-2-13.68a2.08 2.08 0 010-4.16 2.093 2.093 0 110 4.16zm16.426 13.68h-4v-6.44c0-1.614-.573-2.667-2.026-2.667a2.2 2.2 0 00-2.054 1.453c-.104.314-.15.644-.133.974v6.666h-4v-12h4v1.694a4 4 0 013.613-2c2.667 0 4.6 1.72 4.6 5.413v6.907z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _12394401Icon;
/* prettier-ignore-end */
