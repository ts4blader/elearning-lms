import React, { useState } from "react";
import Section from "@components/Section";
import TableFrame from "@components/TableFrame";
import {
  TABLES,
  SCHOOL_DROPDOWN,
  SEMESTERS_DROPDOWN,
} from "@constants/database";
import DropdownMenu from "@components/DropdownMenu";

const Database = () => {
  const [selected, setSelected] = useState(TABLES[0]);

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
          {TABLES.map((item) => (
            <li
              onClick={() => setSelected(item)}
              className="entry-item"
              key={item.name}
              data-selected={selected.name === item.name}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <TableFrame
        title={selected.text}
        className={`${selected.name}-table`}
        tableConfig={selected.tableConfig}
      >
        <selected.panel />
      </TableFrame>
    </Section>
  );
};

export default Database;
