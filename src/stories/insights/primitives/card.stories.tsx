import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "../../../insights/components/primitives/Card/card";

const storyConfig = {
  title: "Design System/Insights/Primitives/Card",
  component: "Card"
};

export default storyConfig;

//Card Template
const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = CardTemplate.bind({});

Default.args = {
  children: <>Test</>
};