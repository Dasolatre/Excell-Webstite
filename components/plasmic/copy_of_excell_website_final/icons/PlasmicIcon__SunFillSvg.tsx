/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SunFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SunFillSvgIcon(props: SunFillSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 24 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <path
          fill={"#235936"}
          d={
            "M12 18.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-18a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 12 .5M12 20a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 12 20m12-7.5a.75.75 0 0 1-.75.75h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 0 1 .75.75m-19.5 0a.75.75 0 0 1-.75.75h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 0 1 .75.75m15.985-8.485a.75.75 0 0 1 0 1.06l-2.12 2.122a.75.75 0 1 1-1.061-1.061l2.121-2.121a.75.75 0 0 1 1.06 0M6.696 17.804a.75.75 0 0 1 0 1.06l-2.121 2.121a.75.75 0 0 1-1.06-1.06l2.12-2.121a.75.75 0 0 1 1.061 0m13.79 3.182a.75.75 0 0 1-1.061 0l-2.121-2.122a.75.75 0 0 1 1.06-1.06l2.121 2.121a.75.75 0 0 1 0 1.06M6.695 7.197a.75.75 0 0 1-1.06 0l-2.12-2.122a.75.75 0 1 1 1.06-1.06l2.121 2.12a.75.75 0 0 1 0 1.063"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 .5h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SunFillSvgIcon;
/* prettier-ignore-end */
