import React from "react";

export type StudentInfoWrapperProps = {} & React.ComponentProps<"div">;
type SharedProps = React.ComponentProps<"div">;

export const StudentInfoWrapper = ({
  children,
  className = "",
  ...rest
}: StudentInfoWrapperProps) => {
  return (
    <div className={`student-info-wrapper ${className}`} {...rest}>
      {children}
    </div>
  );
};

StudentInfoWrapper.Divider = ({ children }: SharedProps) => {
  return <div className="student-info-wrapper-divider">{children}</div>;
};
StudentInfoWrapper.Title = ({ children }: SharedProps) => {
  return <h3 className="student-info-wrapper-title">{children}</h3>;
};
StudentInfoWrapper.Subtitle = ({ children }: SharedProps) => {
  return <div className="student-info-wrapper-subtitle">{children}</div>;
};
StudentInfoWrapper.Container = ({ children }: SharedProps) => {
  return <div className="student-info-wrapper-container">{children}</div>;
};

export default StudentInfoWrapper;
