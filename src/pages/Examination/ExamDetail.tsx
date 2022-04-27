import PseudoField from "@components/PseudoField";
import { Row } from "@layouts/Grid";
import { Button } from "antd";
import React from "react";
import { EXAM_DETAIL_FIELD } from "./data";
import { PaperClipOutlined } from "@ant-design/icons";

type ExamDetailProps = {
  examId: string;
};

const ExamDetail = ({ examId }: ExamDetailProps) => {
  const examination: any = {};

  return (
    <div className="exam-detail">
      {EXAM_DETAIL_FIELD.map((item) => (
        <PseudoField key={item.dataIndex} label={item.label}>
          {examination[item.dataIndex]}
        </PseudoField>
      ))}
      <div className="full-width">
        <PseudoField label="Phân công chấm thi">
          <Row gap="1em">
            {examination.supervisor?.map((item: string) => item)}
          </Row>
        </PseudoField>
        <PseudoField label="File đính kèm">
          <Row gap="1em"></Row>
        </PseudoField>
        <div className="download-btn-wrapper">
          <Button icon={<PaperClipOutlined />} className="download-btn">
            Tải xuống
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExamDetail;
