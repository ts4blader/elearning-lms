import React, { useCallback } from "react";
import ItemActions from "@components/ItemActions";
import { ColumnTitle, Table } from "@components/Table";
import OptionDropdown from "./OptionDropdown";
import { useRouteMatch } from "react-router-dom";
import Tag from "@components/Tag";
import { sortDate, sortNumber, sortString } from "@utils/sortMethod";
import { useAppDispatch, useAppSelector } from "@hooks";
import { StudentProps } from "@types";
import moment from "moment";
import { STUDENT_STATUS } from "@utils/status";
import { removeStudent } from "@slices/studentSlice";

const StudentTable = () => {
  const { path } = useRouteMatch();
  const { Column } = Table;

  // redux hook
  const dispatch = useAppDispatch();
  const student = useAppSelector((state) => state.student);
  const classData = useAppSelector((state) => state.class);
  //* get rerived data
  const getClassData = useCallback(
    (classId: string) => {
      return classData.value.filter((item) => item.id === classId)[0];
    },
    [classData]
  );

  return (
    <Table
      dataSource={student.value}
      rowKey={(record) => record.id}
      selectColumn="student-table"
    >
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="id"
            text="Mã học viên"
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
            reactKey="name"
            text="Tên học viên"
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
            reactKey="birthday"
            text="Ngày sinh"
          />
        )}
        sorter={(a, b) => sortDate(a.birthday, b.birthday)}
        render={(text, record: StudentProps) =>
          moment(record.birthday).format("DD/MM/YYYY")
        }
        key="birthday"
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="gender"
            text="Giới tính"
          />
        )}
        dataIndex="gender"
        key="gender"
        sorter={(a, b) => sortString(a.gender, b.gender)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="ethic"
            text="Dân tộc"
          />
        )}
        dataIndex="ethic"
        key="ethic"
        sorter={(a, b) => sortString(a.ethic, b.ethic)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} reactKey="class" text="Lớp" />
        )}
        render={(text, record: StudentProps) =>
          getClassData(record.classId).name
        }
        key="class"
        sorter={(a, b) =>
          sortString(getClassData(a.classId).name, getClassData(b.classId).name)
        }
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="status"
            text="Tình trạng"
          />
        )}
        key="status"
        render={(text, record: StudentProps) => (
          <Tag.Status status={record.status}>
            {STUDENT_STATUS.find((el) => el.prioty === record.status)?.text}
          </Tag.Status>
        )}
        sorter={(a, b) => sortNumber(a.status, b.status)}
      />
      <Column
        render={(text, record: StudentProps) => (
          <ItemActions>
            <ItemActions.DetailButton to={`${path}/${record.id}`} />
            <span>
              <OptionDropdown studentId={record.id} />
            </span>
            <ItemActions.DeleteButton
              deleteName="học viên"
              onDelete={() => dispatch(removeStudent(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default StudentTable;
