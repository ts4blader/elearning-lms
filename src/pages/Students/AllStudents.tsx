import React, { useState } from "react";
import { Table, Button, Divider } from "antd";
import Page from "@components/Page";
import TableFrame from "@components/TableFrame";
import TablePanel from "@components/TablePanel";
import Select from "@components/Select";
import DATA from "@seeds/thcs/students.json";
import { TABLES } from "./data";
import { DeleteOutlined } from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@hooks";
import DropdownActions from "@components/DropdownActions";
import { showFormModal } from "@slices/formModalSlice";
import UploadForm from "@components/forms/UploadForm";

const AllStudents = () => {
  const [selected, setSelected] = useState(TABLES[0]);
  const pageSize = useAppSelector((state) => state.pageSize);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { path } = useRouteMatch();

  const showImport = () =>
    dispatch(
      showFormModal({
        title: "Tải file lên",
        innerForm: UploadForm,
      })
    );
  const showForm = () => history.push(`${path}/add-student`);

  return (
    <Page title="Hồ sơ học viên" className="students-page">
      <TableFrame
        title={selected.title}
        table={
          selected.table !== null
            ? selected.table
            : () => (
                <Table
                  pagination={{
                    showSizeChanger: false,
                    pageSize: pageSize.value,
                  }}
                  rowKey={(record) => record.id}
                  dataSource={DATA.filter(selected.filter)}
                  columns={selected.columns}
                />
              )
        }
      >
        <TablePanel>
          <TablePanel.SelectionGrp>
            <TablePanel.Field>
              <Select
                defaultValue="Tất cả các khối"
                data={["Khối 6", "Khối 7", "Khối 8"]}
                keyAffix="grade-select"
              />
            </TablePanel.Field>
            <TablePanel.Field>
              <Select
                defaultValue="2021-2022"
                data={["2021-2022", "2021-2023", "2021-2024"]}
                keyAffix="semester-select"
              />
            </TablePanel.Field>
            <TablePanel.Field>
              <div className="tabs">
                {TABLES.map((item) => (
                  <div
                    data-active={item.tab.name === selected.tab.name}
                    className="tabs-item"
                    key={item.tab.name}
                    onClick={() => setSelected(item)}
                  >
                    {item.tab.text}
                  </div>
                ))}
              </div>
            </TablePanel.Field>
          </TablePanel.SelectionGrp>
          <TablePanel.ButtonGrp>
            <Button className="delete-btn" icon={<DeleteOutlined />} />
            <Divider type="vertical" />
            <Button className="export-btn" type="primary" ghost size="large">
              Xuất file
            </Button>
            <DropdownActions
              onManualClick={showForm}
              onImportClick={showImport}
            />
          </TablePanel.ButtonGrp>
        </TablePanel>
      </TableFrame>
    </Page>
  );
};

export default AllStudents;
