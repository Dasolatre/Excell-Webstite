/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GeoAltFill1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GeoAltFill1SvgIcon(props: GeoAltFill1SvgIconProps) {
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
            "M12 24.5s9-8.529 9-15a9 9 0 1 0-18 0c0 6.471 9 15 9 15M12 14a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9"
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

export default GeoAltFill1SvgIcon;
/* prettier-ignore-end */
