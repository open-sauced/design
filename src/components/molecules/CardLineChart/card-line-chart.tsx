import React from 'react';
import EChartWrapper from 'src/components/atoms/EChartWrapper/echart-wrapper';

interface CardLineChartProps {
  option: Object;
}

const CardLineChart: React.FC<CardLineChartProps> = ({ option }) => {
  return (
    <>
      <EChartWrapper option={option} />
    </>
  );
};

export default CardLineChart;
