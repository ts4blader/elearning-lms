import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

type DropdownActionsProps = {
  onManualClick: () => void;
  onImportClick: () => void;
};

const DropdownActions = ({
  onImportClick,
  onManualClick,
}: DropdownActionsProps) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="dropdown-actions">
      <Button
        className="add-btn"
        type="primary"
        size="large"
        icon={<PlusOutlined />}
        onClick={() => setOverlay(true)}
      >
        Thêm mới
      </Button>
      {overlay && (
        <div className="add-item-dropdown">
          {ReactDOM.createPortal(
            <div
              className="add-item-overlay"
              onClick={() => setOverlay(false)}
            ></div>,
            document.getElementsByTagName("body")[0]
          )}
          <Button
            type="primary"
            className="import-btn"
            onClick={() => {
              setOverlay(false);
              onImportClick();
            }}
          >
            Tải file lên
          </Button>
          <Button
            type="primary"
            className="manual-btn"
            onClick={() => {
              setOverlay(false);
              onManualClick();
            }}
          >
            Nhập thủ công
          </Button>
        </div>
      )}
    </div>
  );
};

export default DropdownActions;
