/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1SvgIcon(props: Vector1SvgIconProps) {
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
        fill={"currentColor"}
        d={
          "M1.5 0 0 1.5l3.3 4.622a1.5 1.5 0 0 0 1.223.628h.105a1.5 1.5 0 0 1 1.061.44l4.013 4.012-3.925 3.981A4.504 4.504 0 0 0 0 19.5a4.5 4.5 0 1 0 8.817-1.276l3.981-3.926 1.452 1.452-.457 1.371a1.5 1.5 0 0 0 .363 1.535l4.905 4.905a1.497 1.497 0 0 0 2.12 0l2.38-2.38a1.496 1.496 0 0 0 0-2.12l-4.905-4.905a1.5 1.5 0 0 0-1.535-.363l-1.371.457-1.44-1.44 4.02-3.964a4.507 4.507 0 0 0 5.517-5.511l-3.21 3.211L18 6l-.546-2.635L20.666.153a4.5 4.5 0 0 0-5.513 5.52l-3.96 4.017-4.003-4a1.5 1.5 0 0 1-.44-1.06v-.107a1.5 1.5 0 0 0-.628-1.221zm14.469 15.97a.75.75 0 0 1 1.062 0l4.371 4.372a.75.75 0 0 1-1.06 1.06l-4.373-4.37a.75.75 0 0 1 0-1.063M4.5 16.5l.707.363.793.04.43.667.668.43.039.794.363.706-.363.707-.039.793-.667.43-.431.668-.793.04-.707.362-.707-.363L3 22.098l-.43-.667-.668-.43-.039-.794L1.5 19.5l.363-.706.039-.794.668-.43.43-.668.793-.039z"
        }
      ></path>
    </svg>
  );
}

export default Vector1SvgIcon;
/* prettier-ignore-end */
