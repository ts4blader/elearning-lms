export type FormModalProps = {
  onCancel: () => void;
};
export type FormModalGeneric<T> = {
  defaultData?: T;
} & FormModalProps;
