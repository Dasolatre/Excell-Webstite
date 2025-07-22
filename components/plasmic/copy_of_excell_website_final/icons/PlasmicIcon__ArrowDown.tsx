/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownIcon(props: ArrowDownIconProps) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 11.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowDownIcon;
/* prettier-ignore-end */
