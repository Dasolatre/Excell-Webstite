/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChevronsChevronDownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChevronsChevronDownIcon(props: ChevronsChevronDownIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.235 3.485a.375.375 0 01.53 0L6 7.72l4.235-4.235a.375.375 0 01.53.53l-4.5 4.5a.375.375 0 01-.53 0l-4.5-4.5a.375.375 0 010-.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChevronsChevronDownIcon;
/* prettier-ignore-end */
