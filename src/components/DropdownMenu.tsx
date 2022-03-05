import React, { useState, useRef } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

type Props = {
  initialSelect?: string;
  data: string[];
};

const DropdownMenu = ({ initialSelect, data }: Props) => {
  const [selected, setSelected] = useState(initialSelect || data[0]);
  const dropdown = useRef<HTMLDivElement>(null!);

  const menu = () => (
    <Menu
      onClick={() => null}
      style={{ width: dropdown.current?.clientWidth + "px" }}
    >
      {data.map((item) => (
        <Menu.Item onClick={() => setSelected(item)} key={`semester-${item}`}>
          {item}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="dropdown-menu-wrapper" ref={dropdown}>
      <Dropdown.Button
        overlay={menu}
        placement="bottomRight"
        icon={<DownOutlined />}
        trigger={["click"]}
        className="dropdown-menu"
      >
        {selected}
      </Dropdown.Button>
    </div>
  );
};

export default DropdownMenu;
