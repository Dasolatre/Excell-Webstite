/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretsCaretDownFill3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretsCaretDownFill3Icon(props: CaretsCaretDownFill3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.436 8.355L1.838 4.244A.75.75 0 012.403 3h7.194a.75.75 0 01.565 1.244l-3.598 4.11a.75.75 0 01-1.128 0z"
        }
        fill={"currentColor"}
        fillOpacity={".65"}
      ></path>
    </svg>
  );
}

export default CaretsCaretDownFill3Icon;
/* prettier-ignore-end */
