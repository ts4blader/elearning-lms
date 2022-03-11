import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import scoreData from "@seeds/thcs/scores.json";
import { Button } from "antd";
import TablePanel from "@components/TablePanel";

// export const PANEL = () => {
//   return (
//     <TablePanel>
//       <TablePanel.ButtonGrp>
//         <Button
//           className="add-btn"
//           type="primary"
//           size="large"
//           icon={<PlusOutlined />}
//         >
//           Thêm mới
//         </Button>
//       </TablePanel.ButtonGrp>
//     </TablePanel>
//   );
// };

export const PANEL = () => {
  return <div></div>;
};

export const DATA = scoreData;
export const COLUMNS = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
    align: "center",
  },
  {
    title: "Base",
    dataIndex: "base",
    key: "base",
    sorter: true,
    align: "center",
  },
  {
    title: "Minimum scores amount",
    align: "center",
    children: [
      {
        title: "1st semester",
        dataIndex: "first",
        key: "first",
        align: "center",
      },
      {
        title: "2nd semester",
        dataIndex: "secondary",
        key: "secondary",
        align: "center",
      },
    ],
  },
  {
    title: "",
    key: "action",
    render: (text: string, record: any) => (
      <>
        <span className="edit-btn btn">
          <EditOutlined />
        </span>
        <span className="delete-btn btn">
          <DeleteOutlined />
        </span>
      </>
    ),
  },
];
