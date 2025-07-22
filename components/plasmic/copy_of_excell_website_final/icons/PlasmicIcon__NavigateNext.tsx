/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigateNextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigateNextIcon(props: NavigateNextIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 92 99"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M48.3 49.5L30.667 30.525l5.366-5.775 23 24.75-23 24.75-5.366-5.775L48.3 49.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NavigateNextIcon;
/* prettier-ignore-end */
