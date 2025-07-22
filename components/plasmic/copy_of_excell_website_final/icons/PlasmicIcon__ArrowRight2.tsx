/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRight2Icon(props: ArrowRight2IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.5 12a.75.75 0 01.75-.75h17.69l-4.721-4.719a.751.751 0 011.062-1.062l6 6a.751.751 0 010 1.062l-6 6a.75.75 0 01-1.062-1.062l4.72-4.719H2.25A.75.75 0 011.5 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRight2Icon;
/* prettier-ignore-end */
