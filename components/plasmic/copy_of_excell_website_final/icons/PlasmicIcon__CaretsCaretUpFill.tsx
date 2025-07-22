/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretsCaretUpFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretsCaretUpFillIcon(props: CaretsCaretUpFillIconProps) {
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
          "M5.436 3.645L1.838 7.756A.75.75 0 002.403 9h7.194a.75.75 0 00.565-1.244l-3.598-4.11a.75.75 0 00-1.128 0z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default CaretsCaretUpFillIcon;
/* prettier-ignore-end */
