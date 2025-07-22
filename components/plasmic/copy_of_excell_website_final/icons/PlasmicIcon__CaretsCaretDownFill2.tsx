/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretsCaretDownFill2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretsCaretDownFill2Icon(props: CaretsCaretDownFill2IconProps) {
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
          "M3.624 5.57L1.226 2.83A.5.5 0 011.602 2h4.796a.5.5 0 01.376.83L4.376 5.57a.5.5 0 01-.752 0z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default CaretsCaretDownFill2Icon;
/* prettier-ignore-end */
