import React from "react";

interface LogoTextProps {
  className?: string;
  children: string;
  strong: boolean;
  type: string;
  strikethrough: boolean;
  underline: boolean;
  small: boolean;
  disabled: boolean;
}

const LogoText: React.FC<LogoTextProps> = (props) => {
  return (
    <span
      className="text-lg leading-snug font-medium tracking-tighter"
      {...props}
    >
      {props.children}
    </span>
  );
};

export default LogoText;
