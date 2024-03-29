import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EChartWrapper from "../../../insights/components/primitives/EChartWrapper/echart-wrapper";

const storyConfig = {
  title: "Design System/Insights/Primitives/eChart Wrapper",
  component: "EChartWrapper"
};

export default storyConfig;

const testOptions = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line"
    }
  ]
};

// EChartWrapper Template
const EChartWrapperTemplate: ComponentStory<typeof EChartWrapper> = (args) => <EChartWrapper {...args} />;

// EChartWrapper Default
export const Default = EChartWrapperTemplate.bind({});
Default.args = { option: testOptions };