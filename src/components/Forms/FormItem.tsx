import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Form, FormItemProps as AntItemProps } from "antd";
import { Row, RowProps } from "@layouts/Grid";
import { PlusCircleFilled, MinusCircleFilled } from "@ant-design/icons";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import moment from "moment";
import DatePicker from "@components/DatePicker";
import { useAppSelector } from "@hooks";

export type FormItemProps = {} & AntItemProps;

export type ListItemProps = {
  name: number;
  key: number;
  remove: (index: number | number[]) => void;
};

export type FormListProps = {
  name: string;
  render: React.ComponentType<ListItemProps>;
  className?: string;
  renderAddButton: string | React.ReactNode;
};

type FormListSelectionProps = {
  onChange: (values: string[]) => void;
  className?: string;
  addButtonText?: string;
  initValues?: string[];
};

//* Form Item

export const FormItem = ({
  className = "",
  children,
  ...rest
}: FormItemProps) => {
  return (
    <Form.Item className={`form-item ${className}`} {...rest}>
      {children}
    </Form.Item>
  );
};

FormItem.Title = ({ children, ...rest }: React.ComponentProps<"div">) => {
  return (
    <div className="form-item-title" {...rest}>
      {children}
    </div>
  );
};

//* Form List
export const FormList = ({
  name,
  render,
  renderAddButton,
  className = "",
}: FormListProps) => {
  const Component = render;

  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <div className={`form-list ${className}`}>
          <div className="form-list-inner">
            {fields.map((item) => (
              <Component {...item} remove={remove} />
            ))}
          </div>
          <div className="form-list-control">
            {typeof renderAddButton === typeof "" ? (
              <Button
                type="link"
                className="add-btn"
                onClick={() => add()}
                block
                icon={<PlusCircleFilled />}
              >
                {renderAddButton}
              </Button>
            ) : (
              renderAddButton
            )}
          </div>
        </div>
      )}
    </Form.List>
  );
};

const FormListItem = ({
  name,
  remove,
  className = "",
  children,
}: RowProps & ListItemProps) => {
  return (
    <Row gap="1em" className={`form-list-item ${className}`}>
      <div className="remove-btn" onClick={() => remove(name)}>
        <MinusCircleFilled />
      </div>
      {children}
    </Row>
  );
};

const FormListSelection = ({
  onChange,
  className = "",
  addButtonText = "Thêm môn học",
  initValues = [],
}: FormListSelectionProps) => {
  //redux hook
  const subject = useAppSelector((state) => state.subject);

  const [showSelector, setShowSelector] = useState(false);
  const [selected, setSelected] = useState<string[]>(initValues);
  const selectData = useMemo(() => {
    return subject.value.map((item) => {
      let disabled: boolean = false;
      if (selected.includes(item.id)) disabled = true;

      return { ...item, disabled };
    });
  }, [subject, selected]);

  //* get derived data
  const subjectData = useMemo(() => {
    return selected.map((item) => {
      let foundSubject = subject.value.filter((el) => el.id === item)[0];
      return foundSubject;
    });
  }, [selected, subject]);

  //* select subject methods
  const removeItem = useCallback(
    (id: string) => {
      setSelected(selected.filter((item) => item !== id));
    },
    [selected]
  );
  const addItem = useCallback(
    (id: string) => {
      setSelected([...selected, id]);
    },
    [selected]
  );

  //* bind external data
  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <div className={`form-list form-list-selection ${className}`}>
      {/* form list render */}
      <div className="form-list-inner">
        {subjectData.map((item) => (
          <Row gap="1em" className={`form-list-item`}>
            <div className="remove-btn" onClick={() => removeItem(item.id)}>
              <MinusCircleFilled />
            </div>
            <div className="value">{item.name}</div>
          </Row>
        ))}
      </div>
      <div className="form-list-control">
        {showSelector ? (
          <Select
            className="subject-selector"
            autoFocus={true}
            defaultOpen={true}
            onBlur={() => setShowSelector(false)}
            onChange={(value) => {
              addItem(value);
              setShowSelector(false);
            }}
          >
            {selectData.map((item) => (
              <Select.Option
                value={item.id}
                key={`form-list-selector-${item}`}
                disabled={item.disabled}
              >
                {item.name}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <Button
            type="link"
            className="add-btn"
            onClick={() => setShowSelector(true)}
            block
            icon={<PlusCircleFilled />}
          >
            {addButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export const FormListSemester = () => {
  const disabled = (fields: any[]) => fields.length <= 1;

  return (
    <Form.List
      name="semesters"
      initialValue={[
        {
          id: "hk-1000",
          name: "Học kỳ I",
          beginDay: moment(),
          endDay: moment(),
        },
      ]}
    >
      {(fields, { add, remove }) => (
        <div
          className={`form-list semester-form-list`}
          data-disabled={disabled(fields)}
        >
          <div className="form-list-inner">
            {fields.map(({ key, name }) => (
              <FormListItem key={key} name={name} remove={remove}>
                <Form.Item
                  name={[name, "name"]}
                  label="Tên học kỳ"
                  initialValue="Học kỳ 2"
                  className="semester-name"
                >
                  <TextInput />
                </Form.Item>
                <Form.Item
                  className="semester-begin"
                  label="từ"
                  name={[name, "beginDay"]}
                  initialValue={moment()}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  className="semester-end"
                  label="đến"
                  name={[name, "endDay"]}
                  initialValue={moment()}
                >
                  <DatePicker />
                </Form.Item>
              </FormListItem>
            ))}
          </div>
          <div className="form-list-control">
            <Button
              type="link"
              className="add-btn"
              onClick={() => add()}
              block
              icon={<PlusCircleFilled />}
            >
              Thêm học kỳ
            </Button>
          </div>
        </div>
      )}
    </Form.List>
  );
};

FormList.Item = FormListItem;
FormList.Selection = FormListSelection;
FormList.SemesterList = FormListSemester;
