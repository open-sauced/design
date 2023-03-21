import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "../../../insights/components/primitives/Typography/text";

const storyConfig = {
  title: "Design System/INSIGHTS/Primitives/Text",
  component: "Text"
};

export default storyConfig;

//Text Template
const TextTemplate: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = TextTemplate.bind({});

Default.args = {
  children: "Test",
  strong: false,
  type: "default",
  strikethrough: false,
  underline: false,
  small: false,
  disabled: false
};