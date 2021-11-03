import React from "react";
import { ResizableBox as ReactResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

export default function ResizableBox({
  children,
  width = 265,
  height = 200,
  resizable = true,
  style = {},
  className,
  lockAspectRatio = true
}) {
  return (
    <div >
      {resizable ? (
        <ReactResizableBox width={width} height={height} lockAspectRatio={lockAspectRatio}>
          <div
            style={{
              ...style,
              // marginTop: 10,
              width: "100%",
              height: "100%",
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0
            }}
            className={className} >
            {children}
          </div>
        </ReactResizableBox>
      ) : (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            ...style
          }}
          className={className} >
          {children}
        </div>
      )}
    </div>
  );
}