/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorSvgIcon(props: VectorSvgIconProps) {
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

      <path
        fill={"currentColor"}
        d={
          "M17.613 15.516a9.75 9.75 0 1 0-2.096 2.097h-.001q.066.09.147.173l5.775 5.775a1.5 1.5 0 1 0 2.122-2.121l-5.775-5.775a1.5 1.5 0 0 0-.172-.149M18 9.75a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0"
        }
      ></path>
    </svg>
  );
}

export default VectorSvgIcon;
/* prettier-ignore-end */
