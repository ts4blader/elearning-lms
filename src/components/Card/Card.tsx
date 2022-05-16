import Badge from "@components/Badge";
import ItemActions from "@components/ItemActions";
import PseudoField from "@components/PseudoField";
import { Row } from "@layouts/Grid";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  variant?: "primary" | "secondary";
} & Omit<React.ComponentProps<"div">, "title">;

type InfoCardProps = {
  data: {
    label: string;
    text: string;
  }[];
  status: string;
  titleText: string;
  editButton?: {
    innerForm: React.ComponentType<any>;
    title: string;
  };
  deleteButton?: {
    title: string;
    action: () => void;
  };
} & React.ComponentProps<"div">;

const Card = ({ title, description, variant, ...rest }: CardProps) => {
  return (
    <div className="card" data-variant={variant} {...rest}>
      <div className="card-decor">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

const InfoCard = ({
  data,
  titleText,
  status,
  editButton = { title: "", innerForm: () => null },
  className = "",
  deleteButton = { title: "", action: () => null },
  ...rest
}: InfoCardProps) => {
  return (
    <div className={`info-card ${className}`} {...rest}>
      <Row className="info-card-header" arrange="space-between" gap="1em">
        <Badge status={status as any} text={titleText} />
        <ItemActions>
          <ItemActions.EditButton
            innerForm={editButton.innerForm}
            title={editButton.title}
          />
          <ItemActions.DeleteButton
            deleteName={deleteButton.title}
            onDelete={deleteButton.action}
          />
        </ItemActions>
      </Row>
      <div className="info-card-body">
        {data.map(({ label, text }) => (
          <PseudoField key={`${label}-${text}`} label={label}>
            {text}
          </PseudoField>
        ))}
      </div>
    </div>
  );
};

Card.Info = InfoCard;

export default Card;
