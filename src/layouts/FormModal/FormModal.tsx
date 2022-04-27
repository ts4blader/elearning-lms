import React from "react";
import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "@hooks";
import { hideFormModal } from "@slices/formModalSlice";
import Icon from "@assets/Icon";

const FormModal = () => {
  const dispatch = useAppDispatch();
  const formModal = useAppSelector((state) => state.formModal);

  const Form = formModal.innerForm;
  const onCancel = () => {
    dispatch(hideFormModal());
  };

  return (
    <Modal
      className="form-modal"
      centered={true}
      footer={false}
      title={formModal.title}
      visible={formModal.show}
      onCancel={onCancel}
      data-show-close={formModal.showClose}
      closeIcon={<Icon src="cross.svg" alt="close" />}
    >
      {Form && <Form onCancel={onCancel} />}
    </Modal>
  );
};

export default FormModal;
