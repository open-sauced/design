import React from "react";
import Text from "../../atoms/Typography/text";
import IconButton from "../../atoms/IconButton/icon-button";
import EChartWrapper from "../../atoms/EChartWrapper/echart-wrapper";
import ComponentHeader from "../ComponentHeader/component-header";

interface ScatterChartProps {
    title: string;
    option: Object;
}

const ScatterChart: React.FC<ScatterChartProps> = ({ title, option }) => {
  return (
    <>
      <ComponentHeader title={title} />
      <EChartWrapper option={option} />
    </>
  );
};

export default ScatterChart;