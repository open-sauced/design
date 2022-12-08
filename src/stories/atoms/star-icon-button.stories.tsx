import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StarIconButton from "../../components/atoms/IconButton/star-icon-button";

const storyConfig = {
  title: "Design System/Atoms/Star Icon Button",
  component: "Star Icon Button",
};

export default storyConfig;

//IconButton Template
const StarIconButtonTemplate: ComponentStory<typeof StarIconButton> = (
  args
) => <StarIconButton {...args} />;

export const Default = StarIconButtonTemplate.bind({});
Default.args = {};
