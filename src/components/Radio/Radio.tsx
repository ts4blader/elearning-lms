import React from "react";
import {
  Radio as AntRadio,
  RadioProps as AntRadioProps,
  RadioGroupProps,
} from "antd";

export type RadioProps = {} & AntRadioProps;

const Radio = ({ className = "", children, ...rest }: RadioProps) => {
  return (
    <AntRadio className={`radio ${className}`} {...rest}>
      {children}
    </AntRadio>
  );
};

const Group = ({ className = "", children, ...rest }: RadioGroupProps) => {
  return (
    <AntRadio.Group className={`radio-grp ${className}`} {...rest}>
      {children}
    </AntRadio.Group>
  );
};

Radio.Group = Group;

export default Radio;
