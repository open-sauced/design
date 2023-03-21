import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PillSelector from "../../../insights/components/primitives/PillSelector/pill-selector";
import Thumbnail from "../../../../public/hacktoberfest-icon.png";

const storyConfig = {
  title: "Design System/INSIGHTS/Primitives/PillSelector",
  component: "PillSelector"
};

export default storyConfig;

//PillSelector Template
const PillSelectorTemplate: ComponentStory<typeof PillSelector> = (args) => <PillSelector {...args} />;

export const Default = PillSelectorTemplate.bind({});

Default.args = {};