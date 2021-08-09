import React from "react";
import "./index.css";

export const Image = ({ src, alt, loading, width, height, filter }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      style={
        width || height
          ? {
              width: width,
              height: height,
            }
          : {}
      }
      className={`Image aloria-${filter}`}
    />
  );
};

Image.defaultProps = {
  loading: "lazy",
};
