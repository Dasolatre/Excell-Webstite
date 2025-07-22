/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlertsWarningsAndSignsPlusPlusSquare4IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AlertsWarningsAndSignsPlusPlusSquare4Icon(
  props: AlertsWarningsAndSignsPlusPlusSquare4IconProps
) {
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
        d={
          "M17.5 1.25c.69 0 1.25.56 1.25 1.25v15c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25h15zM2.5 0A2.5 2.5 0 000 2.5v15A2.5 2.5 0 002.5 20h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0017.5 0h-15z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10 5c.345 0 .625.28.625.625v3.75h3.75a.625.625 0 110 1.25h-3.75v3.75a.625.625 0 11-1.25 0v-3.75h-3.75a.625.625 0 110-1.25h3.75v-3.75c0-.345.28-.625.625-.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AlertsWarningsAndSignsPlusPlusSquare4Icon;
/* prettier-ignore-end */
