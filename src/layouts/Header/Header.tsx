import React from "react";
import Icon from "@assets/Icon";

export type HeaderProps = {} & React.ComponentProps<"header">;

const Header = (props: HeaderProps) => {
  return (
    <header className="header" {...props}>
      <div className="user-panel">
        <div className="avatar">
          <Icon src="user_circle.svg" alt="user" />
        </div>
        <div className="username">Admin</div>
        <div className="divider">|</div>
        <div className="logout link">Đăng xuất</div>
      </div>
    </header>
  );
};

export default Header;
