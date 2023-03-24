import ContextFilterOption from "src/insights/components/primitives/ContextFilterOption/context-filter-option";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const storyConfig = {
  title: "Design System/Insights/Primitives/ContextFilterOption"
};
export default storyConfig;

const ContextFilterOptionTemplate: ComponentStory<typeof ContextFilterOption> =
  (args) => <ContextFilterOption {...args} />;
export const Default = ContextFilterOptionTemplate.bind({});
export const Selected = ContextFilterOptionTemplate.bind({});
Default.args = {
  children: <div>Have &gt;5 contributors</div>
};
Selected.args = {
  children: <div>Have &gt;5 contributors</div>,
  isSelected: true
};
