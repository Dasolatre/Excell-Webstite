/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightIcon(props: ArrowRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M1.25 10a.625.625 0 01.625-.625h14.741l-3.934-3.933a.626.626 0 11.886-.885l5 5a.625.625 0 010 .886l-5 5a.626.626 0 11-.886-.886l3.934-3.932H1.875A.625.625 0 011.25 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightIcon;
/* prettier-ignore-end */
