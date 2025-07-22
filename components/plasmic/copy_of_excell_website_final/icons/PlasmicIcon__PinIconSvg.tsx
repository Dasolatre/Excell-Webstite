/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinIconSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinIconSvgIcon(props: PinIconSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-3 0 20 20"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9 7.219a2 2 0 11-3.999.001A2 2 0 019 7.22M7 17S2 10 2 7c0-2.757 2.243-5 5-5s5 2.243 5 5c0 3-5 10-5 10M7 0a7 7 0 00-7 7c0 3.866 7 13 7 13s7-9.134 7-13a7 7 0 00-7-7"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default PinIconSvgIcon;
/* prettier-ignore-end */
