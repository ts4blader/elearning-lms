import Breadcrumb from "@components/Breadcrumb";
import ControlPanel from "@components/ControlPanel";
import Jumbotron from "@components/Jumbotron";
import Page from "@components/Page";
import PseudoField from "@components/PseudoField";
import Select from "@components/Select";
import TextInput from "@components/TextInput";
import { Col, Row } from "@layouts/Grid";
import { Button, Divider } from "antd";
import React from "react";
import { BREADCRUMB_DATA } from "./data";
import { SearchOutlined } from "@ant-design/icons";
import TranscriptTable from "./TranscriptTable";

const PageTitle = () => {
  return <Breadcrumb data={BREADCRUMB_DATA} keyAffix="page-title" />;
};

const Transcript = () => {
  return (
    <Page title={<PageTitle />} className="transcript-page">
      <ControlPanel>
        <ControlPanel.Group>
          <Row gap="1em">
            <Select
              data={["2021-2022", "2022-2023"]}
              defaultValue="2021-2022"
              keyAffix="semester-selector"
            />
            <Select
              data={["6A", "6B", "6C"]}
              placeholder="Chọn lớp"
              keyAffix="class-selector"
            />
            <Select
              data={["Khoi 6", "Khoi 7"]}
              placeholder="Chọn khối"
              keyAffix="grade-selector"
            />
            <Select
              data={["Ngu Van", "Toan"]}
              placeholder="Chọn môn"
              keyAffix="subject-selector"
            />
          </Row>
        </ControlPanel.Group>
        <ControlPanel.Group>
          <Button className="search-btn">Tìm kiếm</Button>
        </ControlPanel.Group>
      </ControlPanel>

      <Divider />

      <Jumbotron.Title>Kết quả tìm kiếm</Jumbotron.Title>
      <Jumbotron className="search-result">
        <Jumbotron.Content>
          <Row align="flex-start">
            <Col>
              <PseudoField label="Môn học">Ngữ văn</PseudoField>
              <PseudoField label="Lớp">10C1</PseudoField>
              <PseudoField label="Mã lớp">class-FS12</PseudoField>
            </Col>
            <Col>
              <PseudoField
                label="Thời gian bắt đầu"
                align="flex-start"
                gap="0.5em"
                direction="column"
              >
                Thứ 6, 20/10/2020 13:00 (GMT +7 Bangkok)
              </PseudoField>
            </Col>
            <Col>
              <PseudoField
                align="flex-start"
                gap="0.5em"
                label="In bảng điểm"
                direction="column"
              >
                <Row gap="1em">
                  <Button className="export-btn">Xuất file</Button>
                  <Select
                    defaultValue="Excel"
                    data={["Excel", "CSV"]}
                    keyAffix="file-type-selector"
                  />
                </Row>
              </PseudoField>
            </Col>
          </Row>
        </Jumbotron.Content>
      </Jumbotron>

      <div className="transcript-table">
        <Row className="transcript-table-head" arrange="space-between">
          <div className="transcript-table-title">Bảng điểm của lớp</div>
          <div className="search-box-wrapper">
            <TextInput
              prefix={<SearchOutlined />}
              placeholder="Tìm kiếm theo ID hoặc tên học viên"
            />
          </div>
        </Row>
        <div className="transcript-table-body">
          <TranscriptTable />
        </div>
      </div>
    </Page>
  );
};

export default Transcript;
