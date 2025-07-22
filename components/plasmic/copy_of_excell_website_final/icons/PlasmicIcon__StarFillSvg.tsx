/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarFillSvgIcon(props: StarFillSvgIconProps) {
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

      <g clipPath={"url(#buIr41deePhka)"}>
        <path
          d={
            "M5.418 23.665c-.58.297-1.236-.224-1.12-.889l1.246-7.095-5.285-5.033c-.493-.471-.237-1.332.425-1.425L8.03 8.179l3.276-6.491a.77.77 0 011.39 0l3.276 6.49 7.347 1.045c.662.093.918.954.423 1.425l-5.283 5.034 1.245 7.094c.117.665-.54 1.186-1.119.889L12 20.28l-6.582 3.384z"
          }
          fill={"#235936"}
        ></path>
      </g>

      <defs>
        <clipPath id={"buIr41deePhka"}>
          <path
            fill={"#fff"}
            transform={"translate(0 .5)"}
            d={"M0 0h24v24H0z"}
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default StarFillSvgIcon;
/* prettier-ignore-end */
