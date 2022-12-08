import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogoText from "../../components/atoms/Typography/logo-text";

const storyConfig = {
  title: "Design System/Atoms/LogoText",
  component: "Logo Text",
};

export default storyConfig;

//Text Template
const LogoTextTemplate: ComponentStory<typeof LogoText> = (args) => (
  <LogoText {...args} />
);

export const Default = LogoTextTemplate.bind({});

Default.args = {
  children: "OpenSauced",
  strong: false,
  type: "default",
  strikethrough: false,
  underline: false,
  small: false,
  disabled: false,
};
