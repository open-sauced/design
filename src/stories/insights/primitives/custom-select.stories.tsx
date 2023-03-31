import { ComponentStory } from "@storybook/react";
import Select from "../../../insights/components/primitives/Select/custom-select";

const StoryConfig = {
  title: "Design System/Insights/Primitives/Custom Select"
};

export default StoryConfig;

const SelectTemplate: ComponentStory<typeof Select> = (args) => (
  <div className="w-full h-full flex items-center">
    <Select {...args} />
  </div>
);

export const NoLabel = SelectTemplate.bind({});

NoLabel.args = {
  options: [
    { name: "select", value: "select" },
    { name: "food", value: "food" },
    { name: "fruit", value: "fruit" }
  ],
  placeholder: "Select an option"
};

export const WithLabel = SelectTemplate.bind({});

WithLabel.args = {
  options: [
    { name: "select", value: "select" },
    { name: "food", value: "food" },
    { name: "fruit", value: "fruit" }
  ],
  label: "Showing"
};
