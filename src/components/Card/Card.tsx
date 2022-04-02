import React from "react";

type CardProps = {
  title: string;
  description: string;
  variant?: "primary" | "secondary";
};

const Card = ({ title, description, variant }: CardProps) => {
  return (
    <div className="card" data-variant={variant}>
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

export default Card;
