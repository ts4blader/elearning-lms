import { setScheduleSwitch } from "@slices/scheduleSwitchSlice";
import ItemActions from "@components/ItemActions";
import TableFrame, { Table } from "@components/Table";
import React from "react";
import ControlPanel from "@components/ControlPanel";
import { ScheduleTable } from "./ScheduleTable";
import { Row } from "@layouts/Grid";
import { useAppDispatch } from "@hooks";
import PseudoField from "@components/PseudoField";

export const ScheduleFrame = () => {
  const { AddButton, DeleteButton } = ControlPanel;
  return (
    <TableFrame
      className="schedule-frame"
      table={ScheduleTable}
      renderTitle="Danh sách phân công giảng dạy"
    >
      <ControlPanel arrange="flex-end">
        <Row gap="1.5em">
          <DeleteButton
            name="phân công"
            selectedName="schedule-table"
            onDelete={() => null}
          />
          <div className="divider"></div>
          <AddButton />
        </Row>
      </ControlPanel>
    </TableFrame>
  );
};

const TopicTitle = () => {
  return (
    <div className="topics-frame-title">
      <Row arrange="space-between">
        <TableFrame.Title>Danh sách chủ đề</TableFrame.Title>
        <ItemActions>
          <ItemActions.EditButton title="" innerForm={() => null} />
          <ItemActions.DeleteButton
            deleteName="phân công"
            onDelete={() => null}
          />
        </ItemActions>
      </Row>
      <Row gap="2.5em" className="schedule-info-row">
        <PseudoField label="Giảng viên">Lương Hoàng D</PseudoField>
        <PseudoField label="Lớp học">6D</PseudoField>
        <PseudoField label="Môn học">Tin học kèm toán</PseudoField>
      </Row>
    </div>
  );
};

const TopicTable = () => {
  return (
    <Table rowKey={(record) => record.id}>
      <Table.Column dataIndex="topic" key="topic" title="Chủ đề" />
      <Table.Column dataIndex="description" key="description" title="Miêu tả" />
      <Table.Column dataIndex="endDay" key="endDay" title="Ngày kết thúc" />
    </Table>
  );
};

export const TopicsFrame = () => {
  const { Button } = ControlPanel;
  const dispatch = useAppDispatch();
  const hideScheduleWork = () => dispatch(setScheduleSwitch(false));

  return (
    <TableFrame
      className="topics-frame"
      renderTitle={TopicTitle}
      table={TopicTable}
    >
      <ControlPanel arrange="flex-end">
        <Button type="primary" onClick={hideScheduleWork}>
          Phân công giảng dạy
        </Button>
      </ControlPanel>
    </TableFrame>
  );
};
