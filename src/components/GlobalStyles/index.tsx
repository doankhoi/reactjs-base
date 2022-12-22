import * as React from "react";
import "./GlobalStyles.scss";

type GlobalStylesProps = {
  children?: React.ReactNode;
};

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default GlobalStyles;
