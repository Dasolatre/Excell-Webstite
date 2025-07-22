/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckLgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckLgIcon(props: CheckLgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M38.208 11.91a2.199 2.199 0 013.141 0c.858.867.87 2.268.03 3.15L23.64 36.03a2.199 2.199 0 01-3.195.06L9.651 25.152a2.27 2.27 0 010-3.18 2.2 2.2 0 013.141 0l9.156 9.279 16.2-19.275.06-.066z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CheckLgIcon;
/* prettier-ignore-end */
