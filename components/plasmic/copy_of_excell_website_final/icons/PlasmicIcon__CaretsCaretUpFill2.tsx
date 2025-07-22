/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretsCaretUpFill2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretsCaretUpFill2Icon(props: CaretsCaretUpFill2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.624 2.43L1.226 5.17a.5.5 0 00.376.83h4.796a.5.5 0 00.376-.83L4.376 2.43a.5.5 0 00-.752 0z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default CaretsCaretUpFill2Icon;
/* prettier-ignore-end */
