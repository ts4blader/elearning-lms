import React from "react";
import { Row, Col } from "@layouts/Grid";
import Jumbotron, { JumbotronProps } from "./Jumbotron";
import Pillar from "./Pillar";

export type InfoJumbotronProps = {
  title: string;
  data: {
    label: string;
    value: any;
  }[][];
  panel: React.ReactNode;
  keyAffix: string;
} & JumbotronProps;

export const InfoJumbotron = ({
  title,
  data,
  panel,
  keyAffix,
  ...rest
}: InfoJumbotronProps) => {
  const { Title, Content } = Jumbotron;

  return (
    <Jumbotron {...rest} className="info-jumbotron">
      <Row arrange="space-between" className="jumbotron-header">
        <div className="jumbotron-title-wrapper">
          <Title>{title}</Title>
        </div>
        <div className="jumbotron-panel">{panel}</div>
      </Row>
      <Content>
        <Row arrange="space-between" align="flex-start">
          {data.map((item, index) => (
            <Col key={`pillar-${keyAffix}-${index}`}>
              <Pillar data={item} />
            </Col>
          ))}
        </Row>
      </Content>
    </Jumbotron>
  );
};
