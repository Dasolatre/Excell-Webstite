/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Linkedin2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Linkedin2SvgIcon(props: Linkedin2SvgIconProps) {
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
          fill={"#3E8B56"}
          d={
            "M0 2.219C0 1.269.789.5 1.763.5h20.475C23.21.5 24 1.27 24 2.219v20.562c0 .95-.789 1.719-1.762 1.719H1.762C.788 24.5 0 23.73 0 22.781zm7.415 18.372V9.754H3.813V20.59zm-1.8-12.318c1.255 0 2.037-.831 2.037-1.872-.023-1.063-.78-1.872-2.014-1.872-1.232 0-2.038.81-2.038 1.872 0 1.041.781 1.872 1.99 1.872zm7.361 12.318v-6.052c0-.325.024-.649.12-.88.26-.646.852-1.317 1.848-1.317 1.304 0 1.824.993 1.824 2.451v5.798h3.602v-6.216c0-3.33-1.776-4.878-4.146-4.878-1.911 0-2.767 1.05-3.248 1.79v.037h-.024l.024-.037V9.754h-3.6c.046 1.017 0 10.837 0 10.837z"
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

export default Linkedin2SvgIcon;
/* prettier-ignore-end */
