import React from "react";
import TextInput from "@components/TextInput";
import { useAppDispatch } from "@stores/hooks";
import { setPageSize } from "@slices/pageSizeSlice";

const DEFAULT_PAGESIZE = 8;

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<"div">;

const TableWrapper = ({ children, className, ...rest }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`table-wrapper ${className}`} {...rest}>
      <div className="pagesize-changer">
        Hiển thị{" "}
        <TextInput
          defaultValue={DEFAULT_PAGESIZE}
          onChange={({ target }) => {
            let num = parseInt(target.value);
            if (num) dispatch(setPageSize(num));
            else dispatch(setPageSize(DEFAULT_PAGESIZE));
          }}
        />{" "}
        hàng mỗi trang
      </div>
      {children}
    </div>
  );
};

export default TableWrapper;