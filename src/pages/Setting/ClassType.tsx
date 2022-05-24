import Breadcrumb from "@components/Breadcrumb";
import ControlPanel from "@components/ControlPanel";
import Page from "@components/Page";
import Select from "@components/Select";
import ItemActions from "@components/ItemActions";
import TableFrame, { ColumnTitle, Table } from "@components/Table";
import { useAppSelector, useAppDispatch } from "@hooks";
import { ClassTypeProps } from "@types";
import { sortString } from "@utils/sortMethod";
import { CLASSTYPE_BREACRUMB } from "./data";
import { removeClassType } from "@slices/classTypeSlice";
import { ClassTypeForm } from "@components/Forms";
import { showFormModal } from "@slices/formModalSlice";

const PageTitle = () => {
  return <Breadcrumb data={CLASSTYPE_BREACRUMB} keyAffix="page-title" />;
};

const InnerTable = () => {
  const dispatch = useAppDispatch();
  const classType = useAppSelector((state) => state.classType);

  const { Column } = Table;

  return (
    <Table rowKey={(record) => record.id} dataSource={classType.value}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            reactKey="name"
            sortColumns={sortColumns}
            text="Loại lớp"
          />
        )}
        key="name"
        dataIndex="name"
        sorter={(a, b) => sortString(a.name, b.name)}
      />
      <Column
        title="Trạng thái"
        render={(text, record: ClassTypeProps) =>
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
        render={(text, record: ClassTypeProps) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập loại lớp học"
              innerForm={(props) => (
                <ClassTypeForm {...props} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="loại lớp học"
              onDelete={() => dispatch(removeClassType(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default function ClassType() {
  const { Group, AddButton } = ControlPanel;

  const schoolYear = useAppSelector((state) => state.schoolYear);
  const dispatch = useAppDispatch();

  return (
    <Page title={<PageTitle />} className="class-type-page">
      <TableFrame renderTitle={"Danh sách các loại lớp học"} table={InnerTable}>
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
                    title: "Thêm mới loại lớp học",
                    innerForm: ClassTypeForm,
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
