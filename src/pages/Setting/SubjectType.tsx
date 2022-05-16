import Breadcrumb from "@components/Breadcrumb";
import ControlPanel from "@components/ControlPanel";
import Page from "@components/Page";
import Select from "@components/Select";
import ItemActions from "@components/ItemActions";
import TableFrame, { ColumnTitle, Table } from "@components/Table";
import { useAppSelector, useAppDispatch } from "@hooks";
import { SubjectTypeProps } from "@types";
import { sortString } from "@utils/sortMethod";
import React from "react";
import { SUBJECTTYPE_BREACRUMB } from "./data";
import { removeSubjectType } from "@slices/subjectTypeSlice";
import { SubjectTypeForm } from "@components/Forms";
import { showFormModal } from "@slices/formModalSlice";

const PageTitle = () => {
  return <Breadcrumb data={SUBJECTTYPE_BREACRUMB} keyAffix="page-title" />;
};

const InnerTable = () => {
  const dispatch = useAppDispatch();
  const subjectType = useAppSelector((state) => state.subjectType);

  const { Column } = Table;

  return (
    <Table rowKey={(record) => record.id} dataSource={subjectType.value}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            reactKey="name"
            sortColumns={sortColumns}
            text="Loại môn"
          />
        )}
        key="name"
        dataIndex="name"
        sorter={(a, b) => sortString(a.name, b.name)}
      />
      <Column
        title="Trạng thái"
        render={(text, record: SubjectTypeProps) =>
          record.disabled ? (
            <div className="disabled-status">Vô hiệu hóa</div>
          ) : (
            <div className="undisabled-status">Đang hoạt động</div>
          )
        }
        key="status"
      />
      <Column title="Ghi chú" key="description" dataIndex="description" />
      <Column
        key="action"
        render={(text, record: SubjectTypeProps) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập loại môn học"
              innerForm={(props) => (
                <SubjectTypeForm {...props} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="loại môn học"
              onDelete={() => dispatch(removeSubjectType(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default function SubjectType() {
  const { Group, AddButton } = ControlPanel;

  const dispatch = useAppDispatch();
  const schoolYear = useAppSelector((state) => state.schoolYear);

  return (
    <Page title={<PageTitle />} className="subject-type-page">
      <TableFrame renderTitle={"Danh sách các loại môn học"} table={InnerTable}>
        <ControlPanel arrange={"space-between"}>
          <Group>
            <Select placeholder={"Niên khóa"}>
              {schoolYear.value.map((el) => (
                <Select.Option value={el.id} key={el.id}>
                  {`${el.beginYear}-${el.endYear}`}
                </Select.Option>
              ))}
            </Select>
          </Group>
          <Group>
            <AddButton
              onClick={() =>
                dispatch(
                  showFormModal({
                    title: "Thêm mới loại môn học",
                    innerForm: SubjectTypeForm,
                  })
                )
              }
            />
          </Group>
        </ControlPanel>
      </TableFrame>
    </Page>
  );
}
