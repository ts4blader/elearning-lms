import React from "react";
import Header from "@layouts/Header";

export type PageProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentProps<"main">, "title">;

const Page = ({ title, children, className = "", ...rest }: PageProps) => {
  return (
    <main className={`page ${className}`} {...rest}>
      <Header />
      <h2 className="page-title">{title}</h2>
      <div className="page-content">{children}</div>
    </main>
  );
};

export default Page;
