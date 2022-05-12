import React, { useCallback } from "react";
import ItemActions from "@components/ItemActions";
import { SubjectForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";
import { useAppDispatch, useAppSelector } from "@hooks";
import { sortNumber, sortString } from "@utils/sortMethod";
import { SubjectProps } from "@types";
import { removeSubject } from "@slices/subjectSlice";

const SubjectTable = () => {
  const { Column } = Table;

  // redux hook
  const dispatch = useAppDispatch();
  const subject = useAppSelector((state) => state.subject);
  const subjectType = useAppSelector((state) => state.subjectType);
  // get derived data
  const getSubjectType = useCallback(
    (subjectId: string) => {
      return subjectType.value.find((item) => item.id === subjectId);
    },
    [subjectType]
  );

  return (
    <Table
      dataSource={subject.value}
      rowKey={(record) => record.id}
      selectColumn="subject-table"
    >
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Mã môn học"
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
            text="Tên môn học"
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
            text="Loại môn học"
            reactKey="subjectTypeId"
          />
        )}
        sorter={(a, b) =>
          sortNumber(
            getSubjectType(a.subjectTypeId)?.prioty,
            getSubjectType(b.subjectTypeId)?.prioty
          )
        }
        render={(text, record: SubjectProps) =>
          getSubjectType(record.subjectTypeId)?.name
        }
        key="subjectTypeId"
      />
      <Column
        title="Số tiết HK1"
        align="center"
        dataIndex="first"
        key="first"
      />
      <Column
        title="Số tiết HK2"
        align="center"
        dataIndex="second"
        key="second"
      />
      <Column
        key="action"
        render={(text, record: SubjectProps) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập môn học"
              innerForm={(props) => (
                <SubjectForm {...props} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="môn học"
              onDelete={() => dispatch(removeSubject(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default SubjectTable;
