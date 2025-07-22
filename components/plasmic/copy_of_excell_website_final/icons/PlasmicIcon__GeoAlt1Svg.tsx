/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GeoAlt1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GeoAlt1SvgIcon(props: GeoAlt1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#0azQPTu8Lcfga)"} fill={"#408033"}>
        <path
          d={
            "M76.037 55.875c-3.275 6.638-7.712 13.25-12.25 19.188A199.993 199.993 0 0150 91.124a199.993 199.993 0 01-13.788-16.063c-4.537-5.937-8.975-12.55-12.25-19.187C20.65 49.169 18.75 42.888 18.75 37.5a31.25 31.25 0 0162.5 0c0 5.388-1.906 11.669-5.213 18.375zM50 100s37.5-35.537 37.5-62.5a37.5 37.5 0 00-75 0C12.5 64.463 50 100 50 100z"
          }
        ></path>

        <path
          d={
            "M50 50a12.5 12.5 0 110-25 12.5 12.5 0 010 25zm0 6.25a18.75 18.75 0 100-37.5 18.75 18.75 0 000 37.5z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"0azQPTu8Lcfga"}>
          <path fill={"#fff"} d={"M0 0h100v100H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default GeoAlt1SvgIcon;
/* prettier-ignore-end */
