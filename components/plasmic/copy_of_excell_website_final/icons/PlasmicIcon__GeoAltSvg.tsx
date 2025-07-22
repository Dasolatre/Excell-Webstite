/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GeoAltSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GeoAltSvgIcon(props: GeoAltSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#kdNbBZcl99lUa)"} fill={"#F8F8F8"}>
        <path
          d={
            "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.996 31.996 0 018 14.58a31.996 31.996 0 01-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 1110 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 102 6c0 4.314 6 10 6 10z"
          }
        ></path>

        <path
          d={"M8 8a2 2 0 110-4 2 2 0 010 4zm0 1a3 3 0 100-6 3 3 0 000 6z"}
        ></path>
      </g>

      <defs>
        <clipPath id={"kdNbBZcl99lUa"}>
          <path fill={"#fff"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default GeoAltSvgIcon;
/* prettier-ignore-end */
