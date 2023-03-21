import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProgressPie from "../../../insights/components/primitives/ProgressPie/progress-pie";

const storyConfig = {
  title: "Design System/INSIGHTS/Primitives/ProgressPie"
};

export default storyConfig;

const ProgressPieTemplate: ComponentStory<typeof ProgressPie> = (args) => <ProgressPie {...args} />;

export const Default = ProgressPieTemplate.bind({});
Default.args = { percentage: 32 };