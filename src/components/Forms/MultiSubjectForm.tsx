import React, { useState } from "react";
import { Divider, Form } from "antd";
import { FormItem, FormButton } from "@components/Forms";
import { SelectInForm } from "@components/Select";
import Tag from "@components/Tag";
import { Row } from "@layouts/Grid";

const SUBJECTS = ["Ngu van", "Toan", "Ly", "Hoa"];

type FormProps = {
  onCancel: () => void;
  onSubjectsChange: (values: string[]) => void;
  initList?: string[];
};

export const MultiSubjectForm = ({
  onCancel,
  onSubjectsChange,
  initList = [],
}: FormProps) => {
  const handleFinish = (value: any) => {
    console.log(value);
    onSubjectsChange(subjects);
    onCancel();
  };

  const [subjects, setSubjects] = useState<string[]>(initList);
  const handleChange = (check: boolean, item: string) => {
    if (check) setSubjects([...subjects, item]);
    else setSubjects(subjects.filter((el) => item !== el));
  };

  return (
    <Form
      className="multi-subject-form"
      name="multi-subject-form"
      onFinish={handleFinish}
    >
      <FormItem name="group" label="Tổ - Bộ môn">
        <SelectInForm data={["Lich su", "Dia ly"]} keyAffix="groud-selector" />
      </FormItem>

      <Divider />

      <FormItem.Title>Danh sách môn học</FormItem.Title>

      <Row gap="0.5em" className="subject-tags">
        {SUBJECTS.map((item) => (
          <Tag.CheckAble
            onChange={(value) => handleChange(value, item)}
            checked={subjects.indexOf(item) !== -1}
          >
            {item}
          </Tag.CheckAble>
        ))}
      </Row>

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton />
      </FormButton.Container>
    </Form>
  );
};
