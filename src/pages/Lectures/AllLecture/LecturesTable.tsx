import React, { useCallback } from "react";
import { ColumnTitle, Table } from "@components/Table";
import Tag from "@components/Tag";
import ItemActions from "@components/ItemActions";
import { OptionDropdown } from "./OptionDropdown";
import { useRouteMatch } from "react-router-dom";
import { LectureProps } from "@types";
import { useAppDispatch, useAppSelector } from "@hooks";
import { LECTURE_STATUS } from "@utils/status";
import { sortDate, sortNumber, sortString } from "@utils/sortMethod";
import moment from "moment";
import { removeLecture } from "@slices/lectureSlice";

export const LecturesTable = () => {
  const { Column } = Table;
  const { url } = useRouteMatch();

  // redux hook
  const dispatch = useAppDispatch();
  const lecture = useAppSelector((state) => state.lecture);
  const subjectGroup = useAppSelector((state) => state.subjectGroup);
  // get derived data
  const getSubjectGroup = useCallback(
    (subjectGroupId: string) => {
      return subjectGroup.value.filter((el) => el.id === subjectGroupId)[0];
    },
    [subjectGroup]
  );

  return (
    <Table
      rowKey={(record: LectureProps) => record.id}
      dataSource={lecture.value}
      selectColumn={"lecture-table"}
    >
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="id"
            text="Mã giảng viên"
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
            text="Tên giảng viên"
          />
        )}
        key="name"
        dataIndex="name"
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
        key="birthday"
        render={(text, record: LectureProps) =>
          moment(record.birthday).format("DD/MM/YYYY")
        }
        sorter={(a, b) => sortDate(a.birthday, b.birthday)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="gender"
            text="Giới tính"
          />
        )}
        key="gender"
        dataIndex="gender"
        sorter={(a, b) => sortString(a.gender, b.gender)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="subjectGroupId"
            text="Tổ bộ môn"
          />
        )}
        key="subjectGroupId"
        render={(text, record: LectureProps) =>
          getSubjectGroup(record.subjectGroupId).name
        }
        sorter={(a, b) =>
          sortString(
            getSubjectGroup(a.subjectGroupId).name,
            getSubjectGroup(b.subjectGroupId).name
          )
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
        render={(text, record: LectureProps) => (
          <Tag.Status status={record.status}>
            {LECTURE_STATUS.find((el) => el.prioty === record.status)?.text}
          </Tag.Status>
        )}
        key="status"
        sorter={(a, b) => sortNumber(a.status, b.status)}
      />
      <Column
        key="actions"
        render={(text, record: LectureProps) => (
          <ItemActions>
            <ItemActions.DetailButton to={`${url}/${record.id}`} />
            <span>
              <OptionDropdown lectureId={record.id} />
            </span>
            <ItemActions.DeleteButton
              deleteName="giảng viên"
              onDelete={() => dispatch(removeLecture(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};
