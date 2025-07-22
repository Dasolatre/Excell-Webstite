/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckCircleSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckCircleSvg2Icon(props: CheckCircleSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#G1z9g_2oMvBMa)"} fill={"#7D73B8"}>
        <path
          d={
            "M12 22.5a10.5 10.5 0 110-21 10.5 10.5 0 010 21zm0 1.5a12 12 0 100-24 12 12 0 000 24z"
          }
        ></path>

        <path
          d={
            "M16.454 7.455l-.03.033-5.209 6.637-3.14-3.14a1.125 1.125 0 00-1.59 1.59l3.97 3.97a1.124 1.124 0 001.618-.03l5.988-7.485a1.125 1.125 0 00-1.607-1.575z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"G1z9g_2oMvBMa"}>
          <path fill={"#fff"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CheckCircleSvg2Icon;
/* prettier-ignore-end */
