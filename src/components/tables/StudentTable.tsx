import React from "react";
import ItemActions from "@components/ItemActions";
import { Table, Tag, Dropdown } from "antd";
import { useAppSelector } from "@stores/hooks";
import DATA from "@seeds/thcs/students.json";
import { EyeOutlined, SyncOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@stores/hooks";
import { showFormModal } from "@slices/formModalSlice";
import ColumnTitle from "@components/ColumnTitle";
import StudentForm from "@components/forms/StudentActionForms";

type StudentType = typeof DATA[0];

const DropdownOverlay = () => {
  const dispatch = useAppDispatch();
  const showModal = (title: string, innerForm: any) => {
    dispatch(
      showFormModal({
        innerForm,
        title,
      })
    );
  };

  return (
    <ul className="edit-student-dropdown-overlay">
      <li onClick={() => null}>Sửa hồ sơ</li>
      <li
        onClick={() =>
          showModal("Cap nhat chuyen lop", StudentForm.ClassTransfer)
        }
      >
        Chuyển lớp
      </li>
      <li
        onClick={() =>
          showModal("Cap nhat chuyen truong", StudentForm.SchoolTransfer)
        }
      >
        Chuyển trường
      </li>
      <li onClick={() => showModal("Cap nhat bao luu", StudentForm.Reserve)}>
        Bảo lưu
      </li>
      <li onClick={() => showModal("Cap nhat mien giam", StudentForm.Discount)}>
        Cập nhật miễn giảm
      </li>
      <li onClick={() => showModal("Cap nhat khen thuong", StudentForm.Prized)}>
        Cập nhật khen thưởng
      </li>
      <li
        onClick={() => showModal("Cap nhat ky luat", StudentForm.Disciplined)}
      >
        Cập nhật kỷ luật
      </li>
    </ul>
  );
};

const StudentTable = () => {
  const { Column } = Table;
  const pageSize = useAppSelector((state) => state.pageSize);

  return (
    <Table
      pagination={{
        showSizeChanger: false,
        pageSize: pageSize.value,
      }}
      dataSource={DATA}
      rowKey={(record) => record.id}
      rowSelection={{
        type: "checkbox",
        onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: (record: any) => ({
          disabled: record.name === "Disabled User", // Column configuration not to be checked
          name: record.name,
        }),
      }}
    >
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} reactKey="id" text="ID" />
        )}
        dataIndex="id"
        key="id"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle sortColumns={sortColumns} reactKey="name" text="Name" />
        )}
        dataIndex="name"
        key="name"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="birthday"
            text="Birthday"
          />
        )}
        dataIndex="birthday"
        key="birthday"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="gender"
            text="Gender"
          />
        )}
        dataIndex="gender"
        key="gender"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="ethic"
            text="Ethic"
          />
        )}
        dataIndex="ethic"
        key="ethic"
        sorter={true}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            reactKey="class"
            text="Class"
          />
        )}
        dataIndex="class"
        key="class"
        sorter={true}
      />
      <Column
        title="Status"
        key="status"
        render={(text, record: StudentType) => (
          <Tag
            icon={<div className="dot"></div>}
            className={record.status.toLowerCase().split(" ").join("-")}
          >
            {record.status}
          </Tag>
        )}
        sorter={true}
      />
      <Column
        render={(text, record) => (
          <ItemActions>
            <ItemActions.Button
              className="detail-btn"
              icon={EyeOutlined}
              onClick={() => null}
            />
            <span>
              <Dropdown overlay={<DropdownOverlay />} trigger={["click"]}>
                <SyncOutlined />
              </Dropdown>
            </span>
            <ItemActions.DeleteButton
              deleteName="học viên"
              onDelete={() => null}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default StudentTable;
