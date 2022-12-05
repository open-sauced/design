import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogoImage from "../../components/atoms/Logo/logo-image";
import OpenSaucedLogoImage from "public/openSauced.svg";

const storyConfig = {
  title: "Design System/Atoms/LogoImage",
  component: "Icon Image",
};

export default storyConfig;

//Logo Image Template
const LogoImageTemplate: ComponentStory<typeof LogoImage> = (args) => (
  <LogoImage {...args} />
);

export const Default = LogoImageTemplate.bind({});
Default.args = { LogoImage: OpenSaucedLogoImage };
