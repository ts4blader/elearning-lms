import React, { useCallback, useMemo, useState } from "react";
import ItemActions from "@components/ItemActions";
import { MenuOutlined } from "@ant-design/icons";
import { GradeForm } from "@components/Forms";
import { ColumnTitle, TableModal, Table } from "@components/Table";
import { SUBTABLE_COLUMNS } from "../sub-table";
import { useAppDispatch, useAppSelector } from "@hooks";
import { sortString } from "@utils/sortMethod";
import { removeGrade } from "@slices/gradeSlice";

const GradeTable = () => {
  const { Column } = Table;

  // redux hook
  const dispatch = useAppDispatch();
  const grade = useAppSelector((state) => state.grade);
  const classData = useAppSelector((state) => state.class);

  //* get derived data
  const getGradeClass = useCallback(
    (gradeId: string) => {
      return classData.value.filter((item) => item.gradeId === gradeId);
    },
    [classData]
  );

  return (
    <Table dataSource={grade.value} rowKey={(record) => record.id}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Mã khoa khối"
            reactKey="id"
          />
        )}
        dataIndex="id"
        key="id"
        sorter={(a, b) => sortString(a.id, b.id)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Tên khoa khối"
            reactKey="name"
          />
        )}
        render={(text, record) => `Khối ${record.name}`}
        key="name"
        sorter={(a, b) => sortString(a.name, b.name)}
      />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              showClose={true}
              icon={MenuOutlined}
              title="Danh sách lớp học"
              innerForm={() => (
                <TableModal
                  name="lớp học"
                  onDelete={() => null}
                  columns={SUBTABLE_COLUMNS}
                  data={getGradeClass(record.id)}
                />
              )}
            />
            <ItemActions.EditButton
              title="Thiết lập khoa khối"
              innerForm={(props) => (
                <GradeForm {...props} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="khoa khối"
              onDelete={() => dispatch(removeGrade(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default GradeTable;
