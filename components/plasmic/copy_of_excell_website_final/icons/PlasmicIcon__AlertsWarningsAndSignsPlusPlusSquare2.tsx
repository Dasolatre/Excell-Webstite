/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlertsWarningsAndSignsPlusPlusSquare2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function AlertsWarningsAndSignsPlusPlusSquare2Icon(
  props: AlertsWarningsAndSignsPlusPlusSquare2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.25.875c.483 0 .875.392.875.875v10.5a.875.875 0 01-.875.875H1.75a.875.875 0 01-.875-.875V1.75c0-.483.392-.875.875-.875h10.5zM1.75 0A1.75 1.75 0 000 1.75v10.5C0 13.216.784 14 1.75 14h10.5A1.75 1.75 0 0014 12.25V1.75A1.75 1.75 0 0012.25 0H1.75z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>

      <path
        d={
          "M7 3.5c.242 0 .438.196.438.438v2.624h2.625a.438.438 0 010 .875H7.437v2.625a.438.438 0 01-.875 0V7.438H3.938a.438.438 0 010-.875h2.626V3.938c0-.242.195-.438.437-.438z"
        }
        fill={"currentColor"}
        fillOpacity={".75"}
      ></path>
    </svg>
  );
}

export default AlertsWarningsAndSignsPlusPlusSquare2Icon;
/* prettier-ignore-end */
