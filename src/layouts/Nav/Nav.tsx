import React, { useState } from "react";
import { Menu } from "antd";
import { CATALOG, OPEN_KEYS } from "./data";
import { useHistory } from "react-router-dom";
import Image from "@assets/Image";

//* Init select
const initialSelect = CATALOG[0].name;
export type NavProps = {
  rootPath: string;
};

const Nav = ({ rootPath }: NavProps) => {
  const [selected, setSelected] = useState(initialSelect);

  const history = useHistory();
  const handleNavLink = (catalog: string, link: string) => {
    //* Set select to bind view
    setSelected(catalog);
    //* check link is not undefined
    history.push(`${rootPath}${link}`);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <Image src="logo-white.png" alt="logo" />
      </div>
      {/* Main nav */}
      <ul className="nav-main">
        {CATALOG.map((item) => (
          <li
            data-selected={selected === item.name}
            className="nav-main-item"
            key={`nav-main-${item.name}`}
            onClick={() => handleNavLink(item.name, item.link)}
          >
            <item.icon />
          </li>
        ))}
      </ul>
      {/* Ant menu */}
      <div className="ant-menu-wrapper">
        <Menu
          mode="inline"
          selectable={false}
          openKeys={OPEN_KEYS}
          expandIcon={<></>}
          className="nav-sub"
        >
          {CATALOG.map((item) =>
            !item.children ? (
              // If not have children
              <Menu.Item
                data-selected={selected === item.name}
                key={item.name}
                icon={<item.icon />}
                onClick={() => handleNavLink(item.name, item.link)}
              >
                {item.text}
              </Menu.Item>
            ) : (
              // Have children
              <Menu.SubMenu
                key={item.name}
                icon={<item.icon />}
                title={item.text}
                onTitleClick={() => handleNavLink(item.name, item.link)}
                data-selected={selected === item.name}
              >
                {item.children.map((el) => (
                  <Menu.Item
                    onClick={() =>
                      handleNavLink(item.name, `${item.link}${el.link}`)
                    }
                    key={`${item.name}-${el.name}`}
                  >
                    {el.text}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            )
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Nav;
