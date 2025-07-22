/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeFillSvgIcon(props: EnvelopeFillSvgIconProps) {
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

      <path
        d={
          "M.075 5.832A3 3 0 013 3.5h18a3 3 0 012.925 2.332L12 13.121.075 5.832zM0 7.545v10.656l8.704-5.337L0 7.545zm10.142 6.2l-9.855 6.04A3 3 0 003 21.5h18a3 3 0 002.712-1.716l-9.855-6.04L12 14.878l-1.858-1.134zm5.154-.879L24 18.201V7.546l-8.704 5.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EnvelopeFillSvgIcon;
/* prettier-ignore-end */
