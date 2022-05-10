import React, { useCallback, useMemo, useState } from "react";
import { Form, Checkbox, Space, Divider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import Select from "@components/Select";
import { FormButton, FormList, FormItem } from "@components/Forms";
import { SchoolYearProps, FormModalGeneric } from "@types";
import { useAppSelector } from "@hooks";

const YEAR_GAP = 5;

export const SemesterForm = <T extends SchoolYearProps>({
  onCancel,
  defaultData,
}: FormModalGeneric<T>) => {
  const [form] = Form.useForm();
  const schoolYear = useAppSelector((state) => state.schoolYear);

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  //* mapped default data
  const data = useMemo(() => {
    return {
      ...defaultData,
      semesters: defaultData?.semesters.map((item) => ({
        ...item,
        beginDay: moment(item.beginDay),
        endDay: moment(item.endDay),
      })),
    };
  }, [defaultData]);

  //* begin year binding
  const [beginYear, setBeginYear] = useState(moment().year());
  //* extends data
  const [extendsData, setExtendsData] = useState(false);
  const getExtendData = useCallback(
    (id: string) => {
      let el = schoolYear.value.filter((item) => item.id === id)[0];
      if (el)
        return el.semesters.map((item) => ({
          ...item,
          beginDay: moment(item.beginDay),
          endDay: moment(item.endDay),
        }));
      else return [];
    },
    [schoolYear]
  );

  return (
    <Form
      name="add-semester"
      initialValues={data}
      form={form}
      onFinish={handleSubmit}
      className="semester-form"
    >
      {/* semester config */}
      <Space size={20} className="form-top" align="start">
        <div className="semester-wrapper">
          <div className="label">Niên khóa:</div>
          <Space size={10} align="center" className="semester-selects">
            <Form.Item
              initialValue={beginYear}
              name="beginYear"
              className="begin-year"
            >
              <Select
                onChange={(value) => {
                  setBeginYear(value);
                }}
              >
                {[...Array(YEAR_GAP)].map((_, index) => (
                  <Select.Option
                    key={`beginYear-selector-${index}`}
                    value={beginYear + index}
                  >
                    {beginYear + index}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <span>đến</span>

            <Form.Item
              name="endYear"
              className="end-year"
              initialValue={beginYear + 1}
            >
              <Select>
                {[...Array(YEAR_GAP)].map((_, index) => (
                  <Select.Option
                    key={`endYear-selector-${index}`}
                    value={beginYear + index + 1}
                  >
                    {beginYear + index + 1}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Space>
        </div>
        <div className="extends-wrapper">
          <Space size={10} align="center">
            {/* Extend checkbox */}
            <Form.Item className="extend-data">
              <Checkbox
                onChange={({ target }) => {
                  setExtendsData(target.checked);
                  if (!target.value)
                    form.setFieldsValue({
                      semesters: [],
                    });
                }}
              >
                Kế thừa dữ liệu:
              </Checkbox>
            </Form.Item>
            {/* Extend school year selector */}
            <Form.Item className="extended-semester">
              <Select
                placeholder="Niên khóa"
                disabled={!extendsData}
                onChange={(value) => {
                  form.setFieldsValue({
                    semesters: getExtendData(value),
                  });
                }}
              >
                {schoolYear.value.map((item) => (
                  <Select.Option value={item.id} key={item.id}>
                    {`${item.beginYear}-${item.endYear}`}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Space>
          <Space size={10} className="warning-wrapper" align="start">
            <InfoCircleOutlined />
            <div className="info">
              <div className="info-title">
                Dữ liệu được kế thừa bao gồm các thông tin:
              </div>
              <ul className="info-list">
                <li>Thông tin học viên và danh sách lớp học</li>
                <li>Thông tin môn học</li>
                <li>Phân công giảng dạy</li>
              </ul>
            </div>
          </Space>
        </div>
      </Space>

      <Divider />
      {/* Time config */}
      <div className="time-config form-bottom">
        <FormItem.Title>Cài đặt thời gian</FormItem.Title>
        <FormList.SemesterList />
      </div>
      {/* Modal buttons */}
      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};

export default SemesterForm;
