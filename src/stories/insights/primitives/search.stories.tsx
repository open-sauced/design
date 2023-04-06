import { ComponentStory } from "@storybook/react";
import Search from "../../../insights/components/primitives/Search/search";

const StoryConfig = {
  title: "Design System/Insights/Primitives/Search"
};
export default StoryConfig;

const SearchTemplate: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = SearchTemplate.bind({});
export const Focused = SearchTemplate.bind({});
export const WithSuggestions = SearchTemplate.bind({});

Default.args = {
  placeholder: "Search repositories",
  name: "Search"
};
Focused.args = {
  placeholder: "Search repositories",
  name: "Search",
  autoFocus: true
};
WithSuggestions.args = {
  placeholder: "Search repositories",
  name: "Search",
  suggestions: ["openarch/north", "opencv/opencv", "openmusic5/featurecity"]
};
