import React from "react";
import Section from "@components/Section";
import { Breadcrumb, Space, Tabs } from "antd";
import { RightOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { PILLARS } from "@constants/class-detail";

type PillarProps = {
  data: any[];
};

const Title = () => {
  const { Item } = Breadcrumb;

  return (
    <Breadcrumb separator={<RightOutlined />}>
      <Item>Khai báo dữ liệu</Item>
      <Item>Lớp học</Item>
      <Item className="main-branch">Chi tiết lớp học</Item>
    </Breadcrumb>
  );
};

const Pillar = ({ data }: PillarProps) => {
  return (
    <ul className="pillar">
      {data.map((item) => (
        <li className="pillar-item" key={item.key}>
          <Space size={20} align="start">
            <div className="label">{item.key}</div>
            <div className="value">{item.value}</div>
          </Space>
        </li>
      ))}
    </ul>
  );
};

const ClassDetail = () => {
  return (
    <Section title={<Title />} className="class-detail">
      <div className="class-detail-header">
        <div className="general-info">
          {/* Top bar */}
          <div className="top-bar">
            <h3 className="title">Thông tin chung</h3>
            <div className="buttons-panel">
              <span className="btn">
                <EditOutlined />
              </span>
              <span className="btn">
                <DeleteOutlined />
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="pillars">
            {PILLARS.map((item, index) => (
              <Pillar data={item} key={`pillar-${index}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="class-detail-body">
        <Tabs className="students-tab" defaultActiveKey="1">
          <Tabs.TabPane tab="Danh sách học viên" key="1">
            Table 1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Danh sách môn học" key="2">
            Table 2
          </Tabs.TabPane>
        </Tabs>
      </div>
    </Section>
  );
};

export default ClassDetail;
