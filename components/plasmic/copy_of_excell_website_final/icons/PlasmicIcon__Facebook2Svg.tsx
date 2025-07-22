/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Facebook2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Facebook2SvgIcon(props: Facebook2SvgIconProps) {
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
            "M24 12.574C24 5.903 18.627.497 12 .497 5.37.5-.003 5.904-.003 12.575c0 6.026 4.39 11.02 10.125 11.927v-8.438H7.077v-3.489h3.048V9.912c0-3.025 1.793-4.696 4.533-4.696 1.314 0 2.687.235 2.687.235v2.97H15.83c-1.49 0-1.954.932-1.954 1.888v2.265h3.327l-.531 3.489h-2.798V24.5C19.611 23.594 24 18.599 24 12.574"
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

export default Facebook2SvgIcon;
/* prettier-ignore-end */
