/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TelephoneFillSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TelephoneFillSvgIcon(props: TelephoneFillSvgIconProps) {
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
          fillRule={"evenodd"}
          d={
            "M2.827 1.266a2.618 2.618 0 0 1 3.915.245L9.435 4.97c.493.634.667 1.461.472 2.241l-.82 3.285a1.02 1.02 0 0 0 .267.964l3.686 3.686a1.02 1.02 0 0 0 .966.267l3.283-.82a2.63 2.63 0 0 1 2.241.472l3.459 2.691a2.617 2.617 0 0 1 .244 3.916l-1.55 1.552c-1.11 1.11-2.77 1.597-4.316 1.052a27.9 27.9 0 0 1-10.515-6.63A27.9 27.9 0 0 1 .222 7.134C-.321 5.588.166 3.927 1.276 2.817z"
          }
          clipRule={"evenodd"}
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

export default TelephoneFillSvgIcon;
/* prettier-ignore-end */
