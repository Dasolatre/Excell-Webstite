/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GeoAltFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GeoAltFillSvgIcon(props: GeoAltFillSvgIconProps) {
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

      <g clipPath={"url(#paKQEy5E8f2Ka)"}>
        <path
          d={
            "M12 24.5s9-8.529 9-15a9 9 0 10-18 0c0 6.471 9 15 9 15zM12 14a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
          }
          fill={"#235936"}
        ></path>
      </g>

      <defs>
        <clipPath id={"paKQEy5E8f2Ka"}>
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

export default GeoAltFillSvgIcon;
/* prettier-ignore-end */
