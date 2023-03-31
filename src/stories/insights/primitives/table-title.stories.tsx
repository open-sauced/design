import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TableTitle from "../../../insights/components/primitives/TableTitle/table-title";

const storyConfig = {
  title: "Design System/Insights/Primitives/TableTitle",
  component: "TableTitle"
};

export default storyConfig;

//Title Template
const TableTitleTemplate: ComponentStory<typeof TableTitle> = (args) => <TableTitle {...args} />;

export const Default = TableTitleTemplate.bind({});

Default.args = {
  text: "Some text"
};