import React, { useState } from "react";
import Page from "@components/Page";
import TableFrame from "@components/Table";
import { TABLES, SCHOOL_DROPDOWN, SEMESTERS_DROPDOWN } from "./data";
import Select from "@components/Select";
import SidePane from "@components/SidePane";
import PseudoField from "@components/PseudoField";

const Database = () => {
  const [selected, setSelected] = useState(TABLES[0]);

  return (
    <Page className="database-page" title="Khai báo dữ liệu">
      <SidePane>
        <SidePane.Head title="Đang chọn xem">
          <PseudoField label="Trường">
            <Select
              keyAffix="school"
              data={SCHOOL_DROPDOWN}
              defaultValue={SCHOOL_DROPDOWN[0]}
            />
          </PseudoField>
          <PseudoField label="Niên khóa">
            <Select
              keyAffix="semester"
              data={SEMESTERS_DROPDOWN}
              defaultValue={SEMESTERS_DROPDOWN[0]}
            />
          </PseudoField>
        </SidePane.Head>
        <SidePane.Body
          data={TABLES.map((item) => item.text)}
          onChange={(index) => setSelected(TABLES[index])}
        />
      </SidePane>
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
