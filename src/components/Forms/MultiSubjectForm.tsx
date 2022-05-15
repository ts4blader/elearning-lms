import React, { useCallback, useMemo, useState } from "react";
import { Divider, Form } from "antd";
import { FormItem, FormButton } from "@components/Forms";
import Select, { SelectInForm } from "@components/Select";
import Tag from "@components/Tag";
import { Row } from "@layouts/Grid";
import { useAppSelector } from "@hooks";

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
  // redux hook
  const subjectGroup = useAppSelector((state) => state.subjectGroup);
  const subject = useAppSelector((state) => state.subject);
  // submit handle
  const handleFinish = (value: any) => {
    console.log(value);
    onSubjectsChange(subjects);
    onCancel();
  };
  // state define
  const [subjects, setSubjects] = useState<string[]>(initList);
  const [selectedSubjectGroup, setSelectedSubjectGroup] = useState(
    subjectGroup.value[0].id
  );
  // change handler
  const handleChange = (check: boolean, item: string) => {
    if (check) setSubjects([...subjects, item]);
    else setSubjects(subjects.filter((el) => item !== el));
  };
  // get derived data
  const subjectData = useMemo(() => {
    let subjectGroupData = subjectGroup.value.filter(
      (el) => el.id === selectedSubjectGroup
    )[0];

    return subjectGroupData.subjectsId.map((item) => {
      return subject.value.filter((el) => el.id === item)[0];
    });
  }, [selectedSubjectGroup, subject, subjectGroup]);

  return (
    <Form
      className="multi-subject-form"
      name="multi-subject-form"
      onFinish={handleFinish}
    >
      <FormItem name="group" label="Tổ - Bộ môn">
        <SelectInForm
          value={selectedSubjectGroup}
          onChange={(value) => setSelectedSubjectGroup(value)}
        >
          {subjectGroup.value.map((el) => (
            <Select.Option value={el.id} key={el.id}>
              {el.name}
            </Select.Option>
          ))}
        </SelectInForm>
      </FormItem>

      <Divider />

      <FormItem.Title>Danh sách môn học</FormItem.Title>

      <Row gap="0.5em" className="subject-tags">
        {subjectData.map((item) => (
          <Tag.CheckAble
            onChange={(value) => handleChange(value, item.id)}
            checked={subjects.indexOf(item.id) !== -1}
          >
            {item.name}
          </Tag.CheckAble>
        ))}
      </Row>

      <FormButton.Container>
        <FormButton.CancelButton onClick={onCancel} />
        <FormButton.SaveButton onClick={onCancel} />
      </FormButton.Container>
    </Form>
  );
};
