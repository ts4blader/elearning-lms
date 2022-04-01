import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="user-panel">
        <div className="avatar">
          <img src="/icons/user_circle.svg" alt="user" />
        </div>
        <div className="username">Admin</div>
        <div className="divider">|</div>
        <div className="logout link">Đăng xuất</div>
      </div>
    </header>
  );
};

export default Header;
