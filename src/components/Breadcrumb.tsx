import React from "react";
import {
  Breadcrumb as AntBreadCrumb,
  BreadcrumbProps as AntBreadCrumbProps,
} from "antd";
import { Link } from "react-router-dom";

type BreadcrumbProps = {
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
        <img src="/icons/caret.svg" alt="" className="separator-icon" />
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
          <Item className="breadcrumb-item main-branch">{item.text}</Item>
        )
      )}
    </AntBreadCrumb>
  );
};

export default Breadcrumb;
