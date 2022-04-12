import { Button, Upload } from "antd";
import React from "react";
import {CameraOutlined} from "@ant-design/icons";

export type InfoWrapperProps = {} & React.ComponentProps<"div">;

type SharedProps = React.ComponentProps<"div">;

type InfoRecordProps = {
  title: string;
} & SharedProps;

type AvatarSectionProps = {
    uploadAble?: boolean
} & SharedProps

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
InfoWrapper.InfoRecord = ({
  title,
  className = "",
  children,
  ...rest
}: InfoRecordProps) => {
  return (
    <div className={`info-wrapper-record ${className}`} {...rest}>
      {title && <InfoWrapper.Subtitle>{title}</InfoWrapper.Subtitle>}
      <div className="info-wrapper-record-content">{children}</div>
    </div>
  );
};
InfoWrapper.AvatarSection = ({uploadAble = false} : AvatarSectionProps) => {
    return <div className="info-wrapper-avatar-section">
        <div className="avatar"></div>
        {uploadAble && 
            <Upload>
                <Button icon={<CameraOutlined />} size="large" />
            </Upload>
        }
    </div>
}

export default InfoWrapper;
