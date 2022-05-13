import { Button, Upload } from "antd";
import React from "react";
import { CameraOutlined } from "@ant-design/icons";

export type InfoWrapperProps = {} & React.ComponentProps<"div">;

type SharedProps = React.ComponentProps<"div">;

type InfoRecordProps = {
  title: string;
} & SharedProps;

type AvatarSectionProps = {
  uploadAble?: boolean;
  initialImg?: string;
} & SharedProps;

export const InfoWrapper = ({
  children,
  className = "",
  ...rest
}: InfoWrapperProps) => {
  return (
    <div className={`info-wrapper ${className}`} {...rest}>
      {children}
    </div>
  );
};

InfoWrapper.Divider = ({ children }: SharedProps) => {
  return <div className="info-wrapper-divider">{children}</div>;
};
InfoWrapper.Title = ({ children }: SharedProps) => {
  return <h3 className="info-wrapper-title">{children}</h3>;
};
InfoWrapper.Subtitle = ({ children }: SharedProps) => {
  return <div className="info-wrapper-subtitle">{children}</div>;
};
InfoWrapper.Container = ({ children }: SharedProps) => {
  return <div className="info-wrapper-container">{children}</div>;
};
InfoWrapper.AvatarSection = ({
  uploadAble = false,
  className = "",
  initialImg = "https://picsum.photos/seed/picsum/300",
}: AvatarSectionProps) => {
  return (
    <div className={`info-wrapper-avatar-section ${className}`}>
      <div className="avatar">
        <img src={initialImg} alt="" />
        {uploadAble && (
          <Upload className="upload-zone">
            <Button icon={<CameraOutlined />} size="large" />
          </Upload>
        )}
      </div>
    </div>
  );
};
InfoWrapper.AvatarPlaceHolder = () => {
  return <div className="info-wrapper-avatar-section"></div>;
};

export default InfoWrapper;
