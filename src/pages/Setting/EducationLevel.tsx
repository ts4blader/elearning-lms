import Breadcrumb from "@components/Breadcrumb";
import ControlPanel from "@components/ControlPanel";
import Page from "@components/Page";
import Select from "@components/Select";
import ItemActions from "@components/ItemActions";
import TableFrame, { ColumnTitle, Table } from "@components/Table";
import { useAppSelector, useAppDispatch } from "@hooks";
import { EducationLevelProps } from "@types";
import { sortString } from "@utils/sortMethod";
import React from "react";
import { EDUCATIONLEVEL_BREACRUMB } from "./data";
import { showFormModal } from "@slices/formModalSlice";
import { removeEducationLevel } from "@slices/educationLevelSlice";
import { EducationLevelForm } from "@components/Forms";

const PageTitle = () => {
  return <Breadcrumb data={EDUCATIONLEVEL_BREACRUMB} keyAffix="page-title" />;
};

const InnerTable = () => {
  const dispatch = useAppDispatch();
  const educationLevel = useAppSelector((state) => state.educationLevel);

  const { Column } = Table;

  return (
    <Table rowKey={(record) => record.id} dataSource={educationLevel.value}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            reactKey="name"
            sortColumns={sortColumns}
            text="Bậc đào tạo"
          />
        )}
        key="name"
        dataIndex="name"
        sorter={(a, b) => sortString(a.name, b.name)}
      />
      <Column
        title="Trạng thái"
        render={(text, record: EducationLevelProps) =>
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
        render={(text, record: EducationLevelProps) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập bậc đào tạo"
              innerForm={(props) => (
                <EducationLevelForm {...props} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="bậc đào tạo"
              onDelete={() => dispatch(removeEducationLevel(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default function EducationLevel() {
  const { Group, AddButton } = ControlPanel;

  const schoolYear = useAppSelector((state) => state.schoolYear);
  const dispatch = useAppDispatch();

  return (
    <Page title={<PageTitle />} className="education-level-page">
      <TableFrame renderTitle={"Danh sách các bậc đào tạo"} table={InnerTable}>
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
                    title: "Thêm mới bậc đào tạo",
                    innerForm: EducationLevelForm,
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
