import React from "react";
import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "@stores/hooks";
import { hideFormModal } from "@slices/formModalSlice";

const FormModal = () => {
  const dispatch = useAppDispatch();
  const formModal = useAppSelector((state) => state.formModal);

  const Form = formModal.innerForm;
  const onCancel = () => {
    dispatch(hideFormModal());
  };

  return (
    <Modal
      centered={true}
      footer={false}
      title={formModal.title}
      visible={formModal.show}
      onCancel={onCancel}
    >
      {Form && <Form onCancel={onCancel} />}
    </Modal>
  );
};

export default FormModal;
