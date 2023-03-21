import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "src/insights/components/primitives/Select/select";
import SelectOption from "src/insights/components/primitives/Select/select-option";

const storyConfig = {
  title: "Design System/INSIGHTS/Primitives/Select",
  component: "Select"
};

export default storyConfig;

//Select Template
const SelectTemplate: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

//Select Option Template (needed?)
const SelectOptionTemplate: ComponentStory<typeof SelectOption> = (
  args
) => <SelectOption {...args} />;

export const Default = SelectTemplate.bind({});

Default.args = {
  children: <SelectOption value="">Test</SelectOption>
};