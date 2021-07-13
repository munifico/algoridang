import React from "react";

export const Title: React.FC<{
  title: string;
  style?: React.CSSProperties;
  props?: any;
}> = ({ title, style, ...props }) => {
  return (
    <h1 style={{ fontSize: "20px", fontWeight: 700, ...style }} {...props}>
      {title}
    </h1>
  );
};

export const SubTitle: React.FC<{
  title: string;
  style?: React.CSSProperties;
  props?: any;
}> = ({ title, style, ...props }) => {
  return (
    <h1 {...props} style={{ fontSize: "18px", fontWeight: 700, ...style }}>
      {title}
    </h1>
  );
};
