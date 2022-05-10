import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Form, FormItemProps as AntItemProps } from "antd";
import { Row, RowProps } from "@layouts/Grid";
import { PlusCircleFilled, MinusCircleFilled } from "@ant-design/icons";
import { SelectInForm } from "@components/Select";
import { SemesterProps } from "@types";
import TextInput from "@components/TextInput";
import moment from "moment";
import DatePicker from "@components/DatePicker";

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
  initValues = ["Toan", "Ngu van"],
}: FormListSelectionProps) => {
  const [showSelector, setShowSelector] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectData, setSelectData] = useState(initValues);

  const removeItem = useCallback(
    (value: string) => {
      //* add new value to selectedData
      setSelectData([...selectData, value]);
      //* remove value to selected
      setSelected(selected.filter((item) => item !== value));
    },
    [selectData, selected]
  );

  const addItem = useCallback(
    (value: string) => {
      //* add new value to selected
      setSelected([...selected, value]);
      //* remove value to selectedData
      setSelectData(selectData.filter((item) => item !== value));
    },
    [selected, selectData]
  );

  //* bind external data
  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <div className={`form-list form-list-selection ${className}`}>
      {/* form list render */}
      <div className="form-list-inner">
        {selected.map((item) => (
          <Row gap="1em" className={`form-list-item`}>
            <div className="remove-btn" onClick={() => removeItem(item)}>
              <MinusCircleFilled />
            </div>
            <div className="value">{item}</div>
          </Row>
        ))}
      </div>
      <div className="form-list-control">
        {showSelector ? (
          <SelectInForm
            data={selectData}
            autoFocus={true}
            defaultOpen={true}
            onBlur={() => setShowSelector(false)}
            onChange={(value) => {
              addItem(value);
              setShowSelector(false);
            }}
            keyAffix="form-list-selector"
          />
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
