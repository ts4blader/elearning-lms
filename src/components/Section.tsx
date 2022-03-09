import React from "react";
import { UserOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"section">;

const Section = ({ title, children, className = "", ...rest }: Props) => {
  return (
    <section className={`section ${className}`} {...rest}>
      <header className="header">
        <div className="user-panel">
          <div className="avatar">
            <UserOutlined />
          </div>
          <div className="username">Admin</div>
          <div className="divider">|</div>
          <div className="logout link">Đăng xuất</div>
        </div>
        <h2 className="header-title">{title}</h2>
      </header>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
