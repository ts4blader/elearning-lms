import React, { useState } from "react";
import Section from "../components/Section";
import { Button, Table, Input } from "antd";
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
      <div className="table-panel">
        <div className="table-panel-header">
          <div className="add-btn-wrapper">
            <Button type="primary" size="large" icon={<PlusOutlined />}>
              Thêm mới
            </Button>
          </div>
        </div>
        <div className="table-panel-body">
          <div className="row">
            <h3 className="title">Niên khóa</h3>
            <Input prefix={<SearchOutlined />} placeholder="Tìm kiếm" />
          </div>
          <Table
            rowKey={(record) => record.id}
            dataSource={SEMESTER}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: [8, 10, 15],
              defaultPageSize: 8,
            }}
            columns={SEMESTER_COLUMNS}
          />
        </div>
      </div>
    </Section>
  );
};

export default Database;
