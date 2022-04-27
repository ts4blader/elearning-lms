import React from "react";
import {
  Breadcrumb as AntBreadCrumb,
  BreadcrumbProps as AntBreadCrumbProps,
} from "antd";
import { Link } from "react-router-dom";
import Icon from "@assets/Icon";

export type BreadcrumbProps = {
  data: {
    text: string;
    link: string;
  }[];
  keyAffix: string;
} & AntBreadCrumbProps;

const Breadcrumb = ({
  data,
  keyAffix = "",
  className = "",
  ...rest
}: BreadcrumbProps) => {
  const { Item } = AntBreadCrumb;

  return (
    <AntBreadCrumb
      className={`breadcrumb ${className}`}
      separator={
        <Icon src="caret.svg" alt="caret" className="separator-icon" />
      }
      {...rest}
    >
      {data.map((item, index) =>
        index !== data.length - 1 ? (
          <Item
            className="breadcrumb-item"
            key={`${keyAffix}-${index}-breadcrumb`}
          >
            <Link to={item.link}>{item.text}</Link>
          </Item>
        ) : (
          <Item
            className="breadcrumb-item main-branch"
            key={`${keyAffix}-${index}-breadcrumb`}
          >
            {item.text}
          </Item>
        )
      )}
    </AntBreadCrumb>
  );
};

export default Breadcrumb;
