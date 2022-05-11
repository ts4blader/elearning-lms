import { ColumnTitle } from "@components/Table";
import { sortString } from "@utils/sortMethod";

export const SUBTABLE_COLUMNS = [
  {
    title: (item: any) => (
      <ColumnTitle sortColumns={item.sortColumns} text="ID" reactKey="id" />
    ),
    dataIndex: "id",
    key: "id",
    sorter: (current: any, next: any) => sortString(current.id, next.id),
  },
  {
    title: (item: any) => (
      <ColumnTitle sortColumns={item.sortColumns} text="Name" reactKey="name" />
    ),
    dataIndex: "name",
    key: "name",
    sorter: (current: any, next: any) => sortString(current.name, next.name),
  },
];
