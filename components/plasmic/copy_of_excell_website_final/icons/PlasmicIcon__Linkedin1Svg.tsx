/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Linkedin1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Linkedin1SvgIcon(props: Linkedin1SvgIconProps) {
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

      <g clipPath={"url(#NWBA-rWnUUjua)"}>
        <path
          d={
            "M0 2.219C0 1.269.789.5 1.762.5h20.476C23.21.5 24 1.27 24 2.219v20.562c0 .95-.789 1.719-1.762 1.719H1.762C.79 24.5 0 23.73 0 22.781V2.219zm7.415 18.372V9.753H3.813v10.838h3.602zm-1.8-12.318c1.255 0 2.037-.831 2.037-1.872-.023-1.063-.78-1.872-2.014-1.872-1.232 0-2.038.81-2.038 1.872 0 1.041.781 1.872 1.99 1.872h.024zm7.361 12.318v-6.053c0-.324.024-.648.12-.879.26-.646.852-1.317 1.848-1.317 1.304 0 1.824.993 1.824 2.451v5.798h3.602v-6.216c0-3.33-1.776-4.878-4.146-4.878-1.911 0-2.768 1.05-3.248 1.79v.037h-.024l.024-.037V9.752h-3.6c.046 1.018 0 10.838 0 10.838h3.6z"
          }
          fill={"#235936"}
        ></path>
      </g>

      <defs>
        <clipPath id={"NWBA-rWnUUjua"}>
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

export default Linkedin1SvgIcon;
/* prettier-ignore-end */
