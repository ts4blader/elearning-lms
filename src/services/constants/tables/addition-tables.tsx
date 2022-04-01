import ColumnTitle from "@components/ColumnTitle";

export const ADDITIONAL_COLUMN = [
  {
    title: (item: any) => (
      <ColumnTitle sortColumns={item.sortColumns} text="ID" reactKey="id" />
    ),
    dataIndex: "id",
    key: "id",
    sorter: true,
  },
  {
    title: (item: any) => (
      <ColumnTitle sortColumns={item.sortColumns} text="Name" reactKey="name" />
    ),
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
];
