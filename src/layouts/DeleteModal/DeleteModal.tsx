import React from "react";
import { Modal } from "antd";
import { useAppSelector, useAppDispatch } from "@stores/hooks";
import { hideDeleteModal } from "@slices/deleteModalSlice";

const DeleteModal = () => {
  const deleteModal = useAppSelector((state) => state.deleteModal);
  const dispatch = useAppDispatch();

  const text = deleteModal.name
    ? `${deleteModal.name} này và toàn bộ`
    : "những";

  return (
    <Modal
      className="delete-modal"
      title={`Xóa ${deleteModal.name}`}
      visible={deleteModal.show}
      centered={true}
      onCancel={() => dispatch(hideDeleteModal())}
      onOk={() => deleteModal.onAction}
      okText="Xác nhận"
    >
      {`Xác nhận muốn xóa ${text} thông tin bên trong? Sau khi xóa không thể hoàn tác.`}
    </Modal>
  );
};

export default DeleteModal;
