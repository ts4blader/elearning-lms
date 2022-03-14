import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "@components/Nav";
import { useRouteMatch } from "react-router-dom";
import Overview from "@pages/Overview";
import Database from "@pages/Database";
import { Modal } from "antd";
import { useAppSelector, useAppDispatch } from "@stores/hooks";
import { hideDeleteModal } from "@slices/deleteModalSlice";

const DashBoard = () => {
  const { path } = useRouteMatch();

  const deleteModal = useAppSelector((state) => state.deleteModal);
  const dispatch = useAppDispatch();

  return (
    <main className="dashboard-page">
      {/* Delete Modal */}
      <Modal
        className="delete-modal"
        title={`Xóa ${deleteModal.name}`}
        visible={deleteModal.show}
        centered={true}
        onCancel={() => dispatch(hideDeleteModal())}
        onOk={() => deleteModal.onAction}
        okText="Xác nhận"
      >
        {`Xác nhận muốn xóa ${deleteModal.name} này và toàn bộ thông tin bên trong? Sau khi xóa không thể hoàn tác.`}
      </Modal>
      {/* Page sider */}
      <div className="page-sider">
        <Nav rootPath={path} />
      </div>
      <div className="sider-placeholder"></div>
      {/* Page content */}
      <div className="page-content">
        <Switch>
          <Route path={path} exact>
            <Overview />
          </Route>
          <Route path={`${path}/database`} exact>
            <Database />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default DashBoard;
