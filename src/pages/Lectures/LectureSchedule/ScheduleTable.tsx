import { Table } from "@components/Table";
import React from "react";
import scheduleData from "@seeds/lecture/shedule-lecture.json";
import { SCHEDULE_COLUMNS } from "./data";
import ItemActions from "@components/ItemActions";
import { OrderedListOutlined } from "@ant-design/icons";

export const ScheduleTable = () => {
  const { Column } = Table;

  return (
    <Table selectColumn="schedule-table" dataSource={scheduleData}>
      {SCHEDULE_COLUMNS.map((item) => (
        <Column {...item} align="center" />
      ))}
      <Column
        key="topicsList"
        title="Danh sách chủ đề"
        align="center"
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.Button
              className="detail-btn"
              icon={OrderedListOutlined}
              onClick={() => null}
            />
          </ItemActions>
        )}
      />
      <Column
        key="actions"
        render={(text, record: any) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Cập nhật lịch giảng dạy"
              innerForm={() => null}
            />
            <ItemActions.DeleteButton
              deleteName="phân công"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};
