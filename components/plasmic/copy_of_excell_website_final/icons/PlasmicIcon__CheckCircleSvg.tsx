/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckCircleSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckCircleSvgIcon(props: CheckCircleSvgIconProps) {
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

      <g fill={"currentColor"} clipPath={"url(#a)"}>
        <path
          d={
            "M12 23a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21m0 1.5a12 12 0 1 0 0-24 12 12 0 0 0 0 24"
          }
        ></path>

        <path
          d={
            "m16.455 7.955-.03.033-5.21 6.637-3.139-3.14a1.125 1.125 0 0 0-1.59 1.59l3.969 3.97a1.123 1.123 0 0 0 1.618-.03l5.988-7.485a1.125 1.125 0 0 0-1.606-1.575"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"currentColor"} d={"M0 .5h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CheckCircleSvgIcon;
/* prettier-ignore-end */
