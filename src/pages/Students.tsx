import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Section from "@components/Section";
import TableFrame from "@components/TableFrame";
import { useRouteMatch } from "react-router-dom";
import { TABLES } from "@constants/students-page";
import TablePanel from "@components/TablePanel";
import Selection from "@components/Selection";
import { Table, Button, Divider } from "antd";
import { useAppSelector } from "@stores/hooks";
import DATA from "@seeds/thcs/students.json";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const Students = () => {
  const { path } = useRouteMatch();
  const [selected, setSelected] = useState(TABLES[0]);
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <Switch>
      <Route path={`${path}`}>
        <Section title="Hồ sơ học viên" className="students-page">
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
                      dataSource={DATA}
                      columns={selected.columns}
                    />
                  )
            }
          >
            <TablePanel>
              <TablePanel.SelectionGrp>
                <TablePanel.Field>
                  <Selection
                    defaultValue="Tất cả các khối"
                    data={["Khối 6", "Khối 7", "Khối 8"]}
                    keyAffix="grade-select"
                  />
                </TablePanel.Field>
                <TablePanel.Field>
                  <Selection
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
                <Button
                  className="export-btn"
                  type="primary"
                  ghost
                  size="large"
                >
                  Xuất file
                </Button>
                <Button
                  className="add-btn"
                  type="primary"
                  size="large"
                  icon={<PlusOutlined />}
                  onClick={() => null}
                >
                  Thêm mới
                </Button>
              </TablePanel.ButtonGrp>
            </TablePanel>
          </TableFrame>
        </Section>
      </Route>
    </Switch>
  );
};

export default Students;
