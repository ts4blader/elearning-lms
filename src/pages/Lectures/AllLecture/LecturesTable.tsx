import React from "react";
import { TABLE_COLUMN } from "./data";
import { ColumnTitle, Table } from "@components/Table";
import lectureData from "@seeds/thcs/lectures.json";
import Tag from "@components/Tag";
import ItemActions from "@components/ItemActions";
import { EyeOutlined } from "@ant-design/icons";
import { OptionDropdown } from "./OptionDropdown";
import { useHistory, useRouteMatch } from "react-router-dom";

export const LecturesTable = () => {
  const { Column } = Table;
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <Table
      rowKey={(record: any) => record.id}
      dataSource={lectureData}
      selectColumn={"lecture-table"}
    >
      {TABLE_COLUMN.map((item) => (
        <Column
          {...item}
          sorter={true}
          title={({ sortColumns }) => (
            <ColumnTitle
              sortColumns={sortColumns}
              reactKey={item.key}
              text={item.title}
            />
          )}
        />
      ))}
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="status"
            text="Tình trạng"
          />
        )}
        render={(text, record: any) => (
          <Tag.Status status={record.status}>{record.status}</Tag.Status>
        )}
        key="status"
      />
      <Column
        key="actions"
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.Button
              icon={EyeOutlined}
              onClick={() => history.push(`${url}/${record.id}`)}
              className="detail-btn"
            />
            <span>
              <OptionDropdown lectureId={record.id} />
            </span>
            <ItemActions.DeleteButton
              deleteName="giảng viên"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};
