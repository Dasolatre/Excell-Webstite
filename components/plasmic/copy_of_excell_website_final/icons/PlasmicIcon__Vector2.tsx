/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
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
        d={
          "M24 12.073C24 5.405 18.628 0 12.002 0 5.372.001 0 5.405 0 12.075 0 18.1 4.388 23.095 10.124 24v-8.436H7.079v-3.489h3.048V9.413c0-3.025 1.792-4.696 4.532-4.696 1.314 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.954.931-1.954 1.887v2.264h3.326l-.53 3.49h-2.798v8.435C19.612 23.093 24 18.099 24 12.073z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
