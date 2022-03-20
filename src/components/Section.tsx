import React from "react";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<"section">, "title">;

const Section = ({ title, children, className = "", ...rest }: Props) => {
  return (
    <section className={`section ${className}`} {...rest}>
      <header className="header">
        <div className="user-panel">
          <div className="avatar">
            <img src="/icons/user_circle.svg" alt="user" />
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
