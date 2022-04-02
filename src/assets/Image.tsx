import React from "react";

export type ImageProps = {
  src: string;
  alt: string;
} & React.ComponentProps<"div">;

const Image = ({ src, alt = "", className = "", ...rest }: ImageProps) => {
  return (
    <div className={`image ${className}`} {...rest}>
      <img src={require("./images/" + src)} alt={alt} />
    </div>
  );
};

export default Image;
