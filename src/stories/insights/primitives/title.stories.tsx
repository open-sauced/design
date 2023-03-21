import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from "../../../insights/components/primitives/Typography/title";

const storyConfig = {
  title: "Design System/INSIGHTS/Primitives/Title",
  component: "Title"
};

export default storyConfig;

//Title Template
const TitleTemplate: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = TitleTemplate.bind({});

Default.args = {
  children: "Test",
  level: 1
};