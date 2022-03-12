import React, { useState } from "react";
import TablePanel from "@components/TablePanel";
import Selection from "@components/Selection";
import { Button, Divider } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import ClassForm from "@components/forms/ClassForm";

const ClassPanel = () => {
  const [show, setShow] = useState(false);

  return (
    <TablePanel
      innerForm={ClassForm}
      popUpTitle="Thêm lớp học"
      show={show}
      onCancel={() => setShow(false)}
    >
      <TablePanel.SelectionGrp>
        <TablePanel.Field>
          <Selection data={["Tất cả các khối", "Khối 6", "Khối 7", "Khối 8"]} />
        </TablePanel.Field>
      </TablePanel.SelectionGrp>
      <TablePanel.ButtonGrp>
        <Button className="delete-btn" icon={<DeleteOutlined />}></Button>
        <Divider type="vertical" />
        <Button className="export-btn" type="primary" size="large" ghost>
          Xuất file
        </Button>
        <Button
          className="add-btn"
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => setShow(true)}
        >
          Thêm mới
        </Button>
      </TablePanel.ButtonGrp>
    </TablePanel>
  );
};

export default ClassPanel;
