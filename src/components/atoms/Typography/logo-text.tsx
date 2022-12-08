import React from "react";
import { Typography } from "@supabase/ui";

export const { Text: SupabaseTextComponent } = Typography;

interface LogoTextProps {
  // extends React.ComponentProps<typeof SupabaseTextComponent> {
  //Add additional prop definitions here
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
