/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextAreaGripperIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextAreaGripperIcon(props: TextAreaGripperIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M10 11l1-1m-4 1l4-4m-7 4l7-7M1 11L11 1"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default TextAreaGripperIcon;
/* prettier-ignore-end */
