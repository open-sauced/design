import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "../../../insights/components/primitives/TextInput/text-input";

const storyConfig = {
  title: "Design System/Insights/Primitives/Text Input",
  component: "TextInput"
};

export default storyConfig;

//TextInput Template
const TextInputTemplate: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = TextInputTemplate.bind({});

Default.args = {
  placeholder: "Test",
  disabled: false,
  autoFocus: true,
  type: "text",
  borderless: false,
  descriptionText: "Test",
  label: "Test"
};