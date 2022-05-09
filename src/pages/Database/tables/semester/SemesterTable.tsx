import React from "react";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/semesters.json";
import { SemesterForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";
import { useAppDispatch, useAppSelector } from "@hooks";
import { SchoolYearProps } from "@types";
import moment from "moment";

const SemesterTable = () => {
  const { Column } = Table;
  const tableData = useAppSelector((state) => state.schoolYear);

  return (
    <Table
      dataSource={tableData.value}
      rowKey={(record) => record.id}
      countColumn={true}
    >
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Niên khóa"
            reactKey="name"
          />
        )}
        key="name"
        sorter={(current, next) => current.beginYear - next.beginYear}
        render={(text, record: SchoolYearProps) =>
          `${record.beginYear}-${record.endYear}`
        }
      />
      <Column
        title="Begin"
        key="begin"
        render={(text, record: SchoolYearProps) => {
          let beginDay = moment(record.semesters[0].beginDay);
          return beginDay.format("DD/MM/YYYY");
        }}
      />
      <Column
        title="End"
        dataIndex="end"
        key="end"
        render={(text, record: SchoolYearProps) => {
          let endDay = moment(
            record.semesters[record.semesters.length - 1].endDay
          );
          return endDay.format("DD/MM/YYYY");
        }}
      />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập niên khóa"
              innerForm={SemesterForm}
            />
            <ItemActions.DeleteButton
              deleteName="niên khóa"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default SemesterTable;
