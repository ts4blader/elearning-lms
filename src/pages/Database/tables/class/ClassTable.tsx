import React, { useCallback } from "react";
import ItemActions from "@components/ItemActions";
import { useRouteMatch } from "react-router-dom";
import { ClassForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";
import { useAppDispatch, useAppSelector } from "@hooks";
import { sortString } from "@utils/sortMethod";
import { ClassProps } from "@types";
import { removeClass } from "@slices/classSlice";

const ClassTable = () => {
  // destruct component
  const { Column } = Table;
  // route props
  const { path } = useRouteMatch();
  // redux hook
  const dispatch = useAppDispatch();
  const classData = useAppSelector((state) => state.class);
  const lecture = {
    value: [
      {
        id: "gv-1000",
        name: "Tran Minh Quoc",
      },
    ],
  };
  // get derived from state
  const getLeader = useCallback((leaderId: string) => {
    return lecture.value.find((item) => item.id === leaderId)?.id;
  }, []);

  return (
    <Table
      dataSource={classData.value}
      rowKey={(record) => record.id}
      selectColumn="class-table"
    >
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} text="Mã lớp" reactKey="id" />
        )}
        dataIndex="id"
        key="id"
        sorter={(a, b) => sortString(a.id, b.id)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Tên lớp"
            reactKey="name"
          />
        )}
        dataIndex="name"
        key="name"
        sorter={(a, b) => sortString(a.name, b.name)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Giáo viên chủ nhiệm"
            reactKey="name"
          />
        )}
        sorter={(a, b) => sortString(a.leaderId, b.leaderId)}
        key="leader"
        render={(text, record: ClassProps) => getLeader(record.leaderId)}
      />
      <Column
        key="action"
        render={(text, record: ClassProps) => (
          <ItemActions>
            <ItemActions.DetailButton to={`${path}/classes/${record.id}`} />
            <ItemActions.EditButton
              title="Thiết lập lớp học"
              innerForm={(props) => (
                <ClassForm {...props} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="lớp học"
              onDelete={() => dispatch(removeClass(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default ClassTable;
