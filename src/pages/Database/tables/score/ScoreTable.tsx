import React from "react";
import ItemActions from "@components/ItemActions";
import { ScoreForm } from "@components/Forms";
import { ColumnTitle, Table } from "@components/Table";
import { Table as AntTable } from "antd";
import { sortNumber, sortString } from "@utils/sortMethod";
import { useAppDispatch, useAppSelector } from "@hooks";
import { removeScoreType } from "@slices/scoreTypeSlice";
import { ScoreTypeProps } from "@types";

const ScoreTable = () => {
  const { Column } = Table;
  const { ColumnGroup } = AntTable;

  // redux hook
  const dispatch = useAppDispatch();
  const scoreType = useAppSelector((state) => state.scoreType);

  return (
    <Table rowKey={(record) => record.id} dataSource={scoreType.value}>
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            text="Loại điểm"
            reactKey="name"
            align="center"
          />
        )}
        render={(text, record: ScoreTypeProps) => `Kiểm tra ${record.name}`}
        align="center"
        key="name"
        sorter={(a, b) => sortString(a.name, b.name)}
      />
      <Column
        title={({ sortColumns }) => (
          <ColumnTitle
            sortColumns={sortColumns}
            align="center"
            text="Hệ số"
            reactKey="base"
          />
        )}
        dataIndex="base"
        key="base"
        align="center"
        sorter={(a, b) => sortNumber(a.base, b.base)}
      />

      <ColumnGroup title="Số cột điểm tối thiểu" align="center">
        <Column title="Học kỳ 1" dataIndex="first" key="first" align="center" />
        <Column
          title="Học kỳ 2"
          dataIndex="second"
          key="second"
          align="center"
        />
      </ColumnGroup>
      {/* Item actions */}
      <Column
        align="center"
        key="action"
        render={(text, record: ScoreTypeProps) => (
          <ItemActions>
            <ItemActions.EditButton
              title="Thiết lập loại điểm"
              innerForm={(props) => (
                <ScoreForm {...props} defaultData={record} />
              )}
            />
            <ItemActions.DeleteButton
              deleteName="loại điểm"
              onDelete={() => dispatch(removeScoreType(record.id))}
            />
          </ItemActions>
        )}
      />
    </Table>
  );
};

export default ScoreTable;
