import React from "react";

type MainProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">;

const StatisticalEntry = ({ children, className, ...rest }: MainProps) => {
  return (
    <div className={`statistical-entry ${className}`} {...rest}>
      {children}
    </div>
  );
};

StatisticalEntry.Header = ({ children, className, ...rest }: MainProps) => {
  return (
    <div className={`statistical-header ${className}`} {...rest}>
      {children}
    </div>
  );
};
StatisticalEntry.Content = ({ children, className, ...rest }: MainProps) => {
  return (
    <div className={`statistical-content ${className}`} {...rest}>
      {children}
    </div>
  );
};
export default StatisticalEntry;
