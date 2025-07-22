/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeFill1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeFill1SvgIcon(props: EnvelopeFill1SvgIconProps) {
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
        fill={"currentColor"}
        d={
          "M.075 5.833A3 3 0 0 1 3 3.5h18a3 3 0 0 1 2.925 2.332L12 13.122zM0 7.544V18.2l8.705-5.337zm10.142 6.2-9.855 6.04A3 3 0 0 0 3 21.5h18a3 3 0 0 0 2.712-1.716l-9.855-6.04L12 14.878zm5.154-.879L24 18.202V7.544z"
        }
      ></path>
    </svg>
  );
}

export default EnvelopeFill1SvgIcon;
/* prettier-ignore-end */
