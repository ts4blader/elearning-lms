import React, { useState } from "react";
import Section from "../components/Section";
import TableFrame from "../components/TableFrame";
import { Button, Input } from "antd";
import SEMESTER from "../seeds/thcs/semesters.json";
import { SEMESTER_COLUMNS } from "../constants/semester-table";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import {
  CONTROL_PANEL,
  SCHOOL_DROPDOWN,
  SEMESTERS_DROPDOWN,
} from "../constants/database";
import DropdownMenu from "../components/DropdownMenu";

const Database = () => {
  const [selected, setSelected] = useState(CONTROL_PANEL[0].name);

  return (
    <Section className="database-page" title="Khai báo dữ liệu">
      <div className="side-panel">
        <div className="view-panel">
          <div className="view-panel-title">Đang chọn xem:</div>
          <div className="view-panel-field">
            <div className="label">Trường:</div>
            <DropdownMenu data={SCHOOL_DROPDOWN} />
          </div>
          <div className="view-panel-field">
            <div className="label">Niên khóa:</div>
            <DropdownMenu data={SEMESTERS_DROPDOWN} />
          </div>
        </div>
        <ul className="entry-list">
          {CONTROL_PANEL.map((item) => (
            <li
              onClick={() => setSelected(item.name)}
              className="entry-item"
              key={item.name}
              data-selected={selected === item.name}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <TableFrame
        title="Niên khóa"
        className="semester-table"
        tableConfig={{
          dataSource: SEMESTER,
          columns: SEMESTER_COLUMNS,
        }}
      >
        <div className="add-btn-wrapper">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Thêm mới
          </Button>
        </div>
      </TableFrame>
    </Section>
  );
};

export default Database;
