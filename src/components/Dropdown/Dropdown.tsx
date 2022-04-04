import React, { useState } from "react";
import ReactDOM from "react-dom";

export type DropdownProps = {
  dropdownContent: React.ReactNode;
} & React.ComponentProps<"div">;

const Dropdown = ({
  dropdownContent,
  children,
  className = "",
  ...rest
}: DropdownProps) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className={`dropdown ${className}`} {...rest}>
      <div className="dropdown-agent" onClick={() => setOverlay(true)}>
        {children}
      </div>
      {overlay && (
        <>
          <div className="dropdown-content">{dropdownContent}</div>
          {ReactDOM.createPortal(
            <div className="overlay" onClick={() => setOverlay(false)}></div>,
            document.getElementsByTagName("body")[0]
          )}
        </>
      )}
    </div>
  );
};

export default Dropdown;
