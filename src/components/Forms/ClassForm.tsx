import React, { useCallback, useState } from "react";
import { Form, Space, Divider, Checkbox } from "antd";
import TextInput from "@components/TextInput";
import Select, { SelectInForm } from "@components/Select";
import { FormButton, FormList, FormItem } from "@components/Forms";
import { FormModalGeneric, ClassProps } from "@types";
import { useAppDispatch, useAppSelector } from "@hooks";
import { RULES } from "@utils/rules";
import { addClass, updateClass } from "@slices/classSlice";
import { generateId } from "@utils/methods";

export const ClassForm = <T extends ClassProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) => {
  // handle submit
  const handleSubmit = (values: any) => {
    if (defaultData) {
      dispatch(
        updateClass({
          ...values,
          id: defaultData.id,
          subjectsId: selected,
        })
      );
    } else {
      dispatch(
        addClass({
          ...values,
          id: generateId("lh"),
          subjectsId: selected,
        })
      );
    }
    form.resetFields();
  };
  // form instance
  const [form] = Form.useForm();
  // redux hook
  const dispatch = useAppDispatch();
  const lecture = {
    value: [
      {
        id: "gv-1000",
        name: "Tran Minh Quoc",
      },
    ],
  };
  const grade = useAppSelector((state) => state.grade);
  const schoolYear = useAppSelector((state) => state.schoolYear);
  const classType = useAppSelector((state) => state.classType);
  const classData = useAppSelector((state) => state.class);
  //* derived method
  const getClass = useCallback(
    (classId: string) => {
      return classData.value.find((item) => item.id === classId);
    },
    [classData]
  );
  //* state define
  const [extend, setExtend] = useState(false);
  const [selected, setSelected] = useState<string[] | undefined>([]);
  const [selectedClass, setSelectedClass] = useState("");

  return (
    <Form
      name="add-class"
      form={form}
      initialValues={defaultData}
      onFinish={handleSubmit}
      className="class-form"
    >
      <div className="form-top">
        <FormItem.Title>Th??ng tin chung</FormItem.Title>
        {/* choose group */}
        <Space size={10} className="semester-group-selection">
          <FormItem
            className="semester-select"
            label="Ni??n kh??a"
            name="schoolYearId"
            initialValue={schoolYear.value[0].id}
          >
            <Select>
              {schoolYear.value.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {`${item.beginYear}-${item.endYear}`}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem
            label="Khoa - Kh???i"
            name="gradeId"
            className="group-select"
            rules={[RULES.required]}
          >
            <SelectInForm>
              {grade.value.map((item) => (
                <Select.Option key={item.id} value={item.id}>
                  {`Kh???i ${item.name}`}
                </Select.Option>
              ))}
            </SelectInForm>
          </FormItem>
        </Space>
        {/* name input */}
        <FormItem
          label="T??n l???p"
          name="name"
          rules={[{ required: true, message: "Xin h??y nh???p t??n l???p" }]}
        >
          <TextInput />
        </FormItem>
        {/* capacity input */}
        <FormItem
          label="S??? l?????ng h???c vi??n"
          name="studentCapacity"
          className="short-item"
          rules={[RULES.required, RULES.number, RULES.minMaxNumber(0, 50)]}
        >
          <TextInput />
        </FormItem>
        {/* choose type */}
        <FormItem
          label="Ph??n lo???i l???p"
          name="classTypeId"
          rules={[RULES.required]}
        >
          <SelectInForm>
            {classType.value.map((item) => (
              <Select.Option value={item.id} key={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </SelectInForm>
        </FormItem>
        {/* choose leader */}
        <FormItem
          label="Gi??o vi??n ch??? nhi???m"
          name="leaderId"
          rules={[RULES.required]}
        >
          <Select.Search>
            {lecture.value.map((item) => (
              <Select.Option value={item.id} key={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select.Search>
        </FormItem>
        {/* description text area */}
        <FormItem label="M?? t???" name="description">
          <TextInput.TextArea />
        </FormItem>
      </div>

      <Divider />

      <div className="form-bottom">
        <FormItem.Title>Danh s??ch m??n h???c</FormItem.Title>
        <Space size={10} className="extend-data">
          <Checkbox
            onChange={({ target }) => {
              setExtend(target.checked);
              if (target.checked)
                setSelected(getClass(selectedClass)?.subjectsId);
              else setSelected([]);
            }}
          >
            K??? th???a d??? li???u:
          </Checkbox>
          <Select
            disabled={!extend}
            placeholder="L???p h???c"
            onChange={(id) => setSelectedClass(id)}
          >
            {classData.value.map((item) =>
              item.id !== defaultData?.id ? (
                <Select.Option value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
              ) : null
            )}
          </Select>
        </Space>
        {/* Form list */}
        <FormList.Selection
          initValues={defaultData?.subjectsId}
          onChange={(values) => setSelected(values)}
        />
      </div>

      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

export default ClassForm;
