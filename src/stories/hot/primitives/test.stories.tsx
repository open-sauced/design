import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Test from "src/hot/components/Test";

const storyConfig = {
  title: "Design System/Hot/Primitives/Test"
};

export default storyConfig;

const TestTemplate: ComponentStory<typeof Test> = (args) => (
  <Test />
);

export const Default = TestTemplate.bind({});
