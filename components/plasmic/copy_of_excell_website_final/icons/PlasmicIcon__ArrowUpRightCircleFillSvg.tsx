/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowUpRightCircleFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowUpRightCircleFillSvgIcon(
  props: ArrowUpRightCircleFillSvgIconProps
) {
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

      <g clipPath={"url(#jD0M1FKbJHCGa)"}>
        <path
          d={
            "M0 12.5a12 12 0 1024 0 12 12 0 00-24 0zm8.856 4.204a.75.75 0 11-1.06-1.06L13.94 9.5H9.788a.75.75 0 010-1.5h5.962a.75.75 0 01.75.75v5.963a.75.75 0 11-1.5 0V10.56l-6.144 6.143z"
          }
          fill={"#235936"}
        ></path>
      </g>

      <defs>
        <clipPath id={"jD0M1FKbJHCGa"}>
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

export default ArrowUpRightCircleFillSvgIcon;
/* prettier-ignore-end */
