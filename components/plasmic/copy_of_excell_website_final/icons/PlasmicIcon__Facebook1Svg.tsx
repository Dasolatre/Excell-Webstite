/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Facebook1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Facebook1SvgIcon(props: Facebook1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#Xrznm_1tl1gVa)"}>
        <path
          d={
            "M24 12.573C24 5.905 18.627.5 12 .5 5.37.5-.003 5.905-.003 12.575c0 6.026 4.39 11.02 10.125 11.927v-8.438H7.077v-3.489h3.048V9.913c0-3.026 1.793-4.697 4.533-4.697 1.314 0 2.687.236 2.687.236v2.97H15.83c-1.49 0-1.954.931-1.954 1.886v2.265h3.327l-.531 3.49h-2.798V24.5C19.611 23.594 24 18.599 24 12.573z"
          }
          fill={"#235936"}
        ></path>
      </g>

      <defs>
        <clipPath id={"Xrznm_1tl1gVa"}>
          <path
            fill={"#fff"}
            transform={"translate(0 .5)"}
            d={"M0 0h24v24H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Facebook1SvgIcon;
/* prettier-ignore-end */
