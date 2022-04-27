import React from "react";

export type JumbotronProps = {} & React.ComponentProps<"div">;
type SharedProps = React.ComponentProps<"div">;

const Jumbotron = ({ className = "", children, ...rest }: JumbotronProps) => {
  return (
    <div className={`jumbotron ${className}`} {...rest}>
      {children}
    </div>
  );
};

Jumbotron.Title = ({ children }: SharedProps) => {
  return <div className="jumbotron-title">{children}</div>;
};
Jumbotron.Content = ({ children }: SharedProps) => {
  return <div className="jumbotron-content">{children}</div>;
};

export default Jumbotron;
