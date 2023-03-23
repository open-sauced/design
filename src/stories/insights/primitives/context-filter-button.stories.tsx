import ContextFilterButton from "src/insights/components/primitives/ContextFilterButton/context-filter-button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const storyConfig = {
  title: "Design System/Insights/Primitives/ContextFilterButton"
};
export default storyConfig;

const ContextFilterButtonTemplate: ComponentStory<typeof ContextFilterButton> =
  (args) => <ContextFilterButton {...args} />;
export const Default = ContextFilterButtonTemplate.bind({});

Default.args = {
  children: <div>Text</div>
};
