import React, { useState } from "react";
import { Form, Checkbox, Divider } from "antd";
import { FormItem } from "./FormItem";
import { Row } from "@layouts/Grid";
import Select, { SelectInForm } from "@components/Select";
import Radio from "@components/Radio";
import { FormButton } from "./FormButtons";
import { RULES } from "@utils/rules";
import TextInput from "@components/TextInput";
import { DatePickerInForm } from "@components/DatePicker";

type FormProps = {
  onCancel: () => void;
};

export const ExaminationForms = ({ onCancel }: FormProps) => {
  const handleFinish = (values: any) => {
    console.log(values, classes);
  };
  const [form] = Form.useForm();

  const [classType, setClassType] = useState("");
  const [classes, setClasses] = useState<string[]>([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSupervisorType, setSelectedSupervisorType] = useState("all");
  const [supervisors, setSupervisors] = useState<any[]>([]);

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      name="examination-form"
      className="examination-form"
    >
      {/* Class and year selector row */}
      <Row arrange="space-between" className="class-n-year-field">
        <FormItem label="Niên khóa" name="year" className="year-field">
          <SelectInForm
            placeholder="Chọn học kỳ"
            data={["2021-2022", "2022-2023"]}
            keyAffix="year-selector"
          />
        </FormItem>
        <FormItem label="Khối" name="grade" className="grade-field">
          <SelectInForm
            placeholder="Chọn khối"
            data={["Khoi 9", "Khoi 8"]}
            keyAffix="grade-selector"
            onChange={(value) => setSelectedGrade(value)}
          />
        </FormItem>
      </Row>

      <FormItem
        className="classes-field"
        label="Lớp học"
        name="classType"
        rules={[RULES.required]}
      >
        <Radio.Group
          disabled={selectedGrade === ""}
          value={classType}
          onChange={({ target }) => setClassType(target.value)}
          size="large"
        >
          <Radio value="all">Tất cả lớp</Radio>
          <Radio value="basic">Lớp cơ bản</Radio>
          <Radio value="advanced">Lớp nâng cao</Radio>
          <Radio value="others">Tùy chọn</Radio>
          {classType === "others" && (
            <Select.Multi
              data={["9c", "9b"]}
              onChange={(value) => setClasses(value)}
              keyAffix="class-multi"
            />
          )}
        </Radio.Group>
      </FormItem>

      <FormItem label="Môn thi" name="subject" rules={[RULES.required]}>
        <SelectInForm data={["Toan", "Ngu van"]} keyAffix="subject-selector" />
      </FormItem>

      <FormItem label="Tên kỳ thi" name="subject" rules={[RULES.required]}>
        <TextInput />
      </FormItem>

      <FormItem name="semester" className="semester-field">
        <Checkbox.Group>
          <Checkbox value="semester-1">Học kỳ I</Checkbox>
          <Checkbox value="semester-2">Học kỳ II</Checkbox>
        </Checkbox.Group>
      </FormItem>

      <FormItem
        label="Thời gian làm bài"
        name="duration"
        className="duration-field"
        rules={[RULES.required]}
      >
        <TextInput placeholder="Nhập số phút" />
        <span> phút</span>
      </FormItem>

      <FormItem
        rules={[RULES.required]}
        label="Ngày làm bài"
        name="day"
        className="day-field"
      >
        <DatePickerInForm />
      </FormItem>

      <Divider />

      <FormItem.Title>Phân công chấm thi</FormItem.Title>

      <Radio.Group
        className="supervisor-field"
        size="large"
        defaultValue="all"
        disabled={classType.length === 0}
        onChange={({ target }) => setSelectedSupervisorType(target.value)}
      >
        <Row>
          <Radio value="all">Áp dụng tất cả lớp</Radio>
          <Select.Multi
            disabled={selectedSupervisorType !== "all"}
            data={["Nguyen van A", "Tran Minh Quoc"]}
            onChange={(values) => setSupervisors(values)}
            keyAffix="supervisor-multi"
          />
        </Row>
        <Row align="flex-start">
          <Radio
            value="others"
            onClick={() => {
              setSupervisors([
                {
                  key: "9c",
                  value: null,
                },
                {
                  key: "9b",
                  value: null,
                },
              ]);
            }}
          >
            Tùy chọn
          </Radio>
          {selectedSupervisorType === "others" && (
            <Row
              className="select-multi-grp"
              align="flex-start"
              direction="column"
              gap="1em"
            >
              {supervisors.map((item, index) => (
                <Row gap="2em">
                  <div className="text">{item.key}</div>
                  <Select.Multi
                    data={["Nguyen van A", "Tran Minh Quoc"]}
                    keyAffix={`${item.key}-selector`}
                  />
                </Row>
              ))}
            </Row>
          )}
        </Row>
      </Radio.Group>

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};
