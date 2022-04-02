import React, { useState } from "react";
import Page from "@components/Page";
import TableFrame from "@components/TableFrame";
import { TABLES, SCHOOL_DROPDOWN, SEMESTERS_DROPDOWN } from "./data";
import Select from "@components/Select";

const Database = () => {
  const [selected, setSelected] = useState(TABLES[0]);

  return (
    <Page className="database-page" title="Khai báo dữ liệu">
      <div className="side-panel">
        <div className="view-panel">
          <div className="view-panel-title">Đang chọn xem:</div>
          <div className="view-panel-field">
            <div className="label">Trường:</div>
            <Select
              keyAffix="school"
              data={SCHOOL_DROPDOWN}
              defaultValue={SCHOOL_DROPDOWN[0]}
            />
          </div>
          <div className="view-panel-field">
            <div className="label">Niên khóa:</div>
            <Select
              keyAffix="semester"
              data={SEMESTERS_DROPDOWN}
              defaultValue={SEMESTERS_DROPDOWN[0]}
            />
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
        table={selected.table}
      >
        <selected.panel />
      </TableFrame>
    </Page>
  );
};

export default Database;
