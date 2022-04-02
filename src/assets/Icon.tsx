import React from "react";

export type IconProps = {
  src: string;
  alt: string;
} & React.ComponentProps<"div">;

const Icon = ({ src, alt = "", className = "", ...rest }: IconProps) => {
  return (
    <div className={`icon ${className}`} {...rest}>
      <img src={require("./icons/" + src)} alt={alt} />
    </div>
  );
};

export default Icon;
