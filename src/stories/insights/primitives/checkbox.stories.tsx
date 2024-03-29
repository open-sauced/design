import Checkbox from "src/insights/components/primitives/Checkbox/checkbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const storyConfig = {
  title: "Design System/Insights/Primitives/Checkbox"
};

export default storyConfig;

// FilterCard Template
const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

// FilterCard Default
export const Default = CheckboxTemplate.bind({});
Default.args = { label: "test" };
