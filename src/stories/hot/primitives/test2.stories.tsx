import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Test2 from "src/hot/components/Test2";

const storyConfig = {
  title: "Design System/Hot/Primitives/Test2"
};

export default storyConfig;

const Test2Template: ComponentStory<typeof Test2> = (args) => (
  <Test2 />
);

export const Default = Test2Template.bind({});
