import React, { useState } from "react";
import { Form, Checkbox, Button, Space, Divider } from "antd";
import {
  MinusCircleFilled,
  PlusCircleFilled,
  InfoCircleOutlined,
} from "@ant-design/icons";
import moment from "moment";
import TextInput from "@components/TextInput";
import Select from "@components/Select";
import DatePicker from "@components/DatePicker";
import { FormButton } from "@components/Forms";

type Props = {
  onCancel: () => void;
};

export const SemesterForm = ({ onCancel }: Props) => {
  const [extendsData, setExtendsData] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="add-semester" onFinish={handleSubmit} className="semester-form">
      {/* semester config */}
      <Space size={20} className="form-top" align="start">
        <div className="semester-wrapper">
          <div className="label">Niên khóa:</div>
          <Space size={10} align="center" className="semester-selects">
            <Form.Item
              initialValue="2021"
              name="beginYear"
              className="begin-year"
            >
              <Select data={["2021", "2022", "2023"]} keyAffix="begin-year" />
            </Form.Item>

            <span>đến</span>

            <Form.Item name="endYear" className="end-year" initialValue="2022">
              <Select data={["2021", "2022", "2023"]} keyAffix="end-year" />
            </Form.Item>
          </Space>
        </div>
        <div className="extends-wrapper">
          <Space size={10} align="center">
            <Form.Item name="extendData" className="extend-data">
              <Checkbox
                onChange={({ target }) => setExtendsData(target.checked)}
              >
                Kế thừa dữ liệu:
              </Checkbox>
            </Form.Item>

            <Form.Item
              name="extendedSemester"
              initialValue="2021-2022"
              className="extended-semester"
            >
              <Select
                disabled={!extendsData}
                data={["2021-2022", "2022-2023"]}
                keyAffix="extend-semester"
              />
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
        <div className="title">Cài đặt thời gian</div>
        <Form.List name="semester">
          {(fields, { add, remove }) => (
            <>
              <div className="list">
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="center" className="time-config-item">
                    <div className="remove-btn" onClick={() => remove(name)}>
                      <MinusCircleFilled />
                    </div>

                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      label="Tên học kỳ"
                      initialValue="Học kỳ 2"
                      className="semester-name"
                    >
                      <TextInput />
                    </Form.Item>

                    <Form.Item
                      className="semester-begin"
                      {...restField}
                      label="từ"
                      name={[name, "begin"]}
                      initialValue={moment()}
                    >
                      <DatePicker allowClear={false} />
                    </Form.Item>
                    <Form.Item
                      className="semester-end"
                      label="đến"
                      {...restField}
                      name={[name, "end"]}
                      initialValue={moment()}
                    >
                      <DatePicker allowClear={false} />
                    </Form.Item>
                  </Space>
                ))}
              </div>
              <Form.Item>
                <Button
                  type="link"
                  className="add-btn"
                  onClick={() => add()}
                  block
                  icon={<PlusCircleFilled />}
                >
                  Thêm học kỳ
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
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
