import React, { useCallback, useState } from "react";
import ItemActions from "@components/ItemActions";
import { MenuOutlined } from "@ant-design/icons";
import { GroupForm } from "@components/Forms";
import { ColumnTitle, TableModal, Table } from "@components/Table";
import { SUBTABLE_COLUMNS } from "../sub-table";
import { useAppDispatch, useAppSelector } from "@hooks";
import { sortString } from "@utils/sortMethod";
import { SubjectGroupProps } from "@types";
import {
  removeSubjectGroup,
  updateSubjectGroup,
} from "@slices/subjectGroupSlice";

const GroupTable = () => {
  const { Column } = Table;
  // redux hook
  const dispatch = useAppDispatch();
  const subjectGroup = useAppSelector((state) => state.subjectGroup);
  const subject = useAppSelector((state) => state.subject);
  const lectures: any[] = [];
  //* derived from state
  const getLecture = useCallback(
    (id: string) => {
      return lectures.filter((item) => item.id === id)[0];
    },
    [lectures]
  );
  const getSubjects = useCallback((record: string[]) => {
    return record.map((item) => {
      return subject.value.filter((el) => el.id === item)[0];
    });
  }, []);

  return (
    <Table dataSource={subjectGroup.value} rowKey={(record) => record.id}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Tên bộ môn"
            reactKey="name"
          />
        )}
        dataIndex="name"
        key="name"
        sorter={(current, next) => sortString(current.name, next.name)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Trưởng bộ môn"
            reactKey="leaderId"
          />
        )}
        key="leaderId"
        render={(text, record) => getLecture(record.id)}
        sorter={(a, b) => sortString(getLecture(a.id), getLecture(b.id))}
      />
      <Column
        key="action"
        render={(text, record: SubjectGroupProps) => (
          <ItemActions>
            <ItemActions.EditButton
              icon={MenuOutlined}
              showClose={true}
              title="Danh sách môn học"
              innerForm={() => (
                <TableModal
                  name="môn học"
                  columns={SUBTABLE_COLUMNS}
                  data={getSubjects(record.subjectsId)}
                  onDelete={(value) =>
                    dispatch(
                      updateSubjectGroup({
                        ...record,
                        subjectsId: value.map(
                          (item: SubjectGroupProps) => item.id
                        ),
                      })
                    )
                  }
                />
              )}
            />
            <ItemActions.EditButton
              title="Thiết lập tổ - bộ môn"
              showClose={true}
              innerForm={({ onCancel }) => (
                <GroupForm onCancel={onCancel} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="tổ - bộ môn"
              onDelete={() => dispatch(removeSubjectGroup(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default GroupTable;
