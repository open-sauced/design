import LanguagePill from "../../../insights/components/primitives/LanguagePill/LanguagePill";
import { ComponentStory } from "@storybook/react";

const Storyconfig = {
  title: "Design System/Insights/Primitives/LanguagePill"
};
export default Storyconfig;

const LanguagePillTemplate: ComponentStory<typeof LanguagePill> = (args) => <LanguagePill {...args} />;

export const LanguagePillDefault = LanguagePillTemplate.bind({});
export const LanguagePillSelected = LanguagePillTemplate.bind({});

LanguagePillDefault.args = {
  topic: "javascript"
};

LanguagePillSelected.args = {
  topic: "python",

  classNames: "bg-light-orange-10 text-white"
};
