import FavoriteSelector from "../../../insights/components/primitives/FavoriteSelector/favorite-selector";
import { ComponentStory } from "@storybook/react";


const StoryConfig = {
  title: "Design System/Insights/Primitives/FavoriteSelector"

};
export default StoryConfig;

const FavoriteSelectorTemplate: ComponentStory<typeof FavoriteSelector> = (args)=> <FavoriteSelector {...args}/>;

export const Filled = FavoriteSelectorTemplate.bind({});
Filled.args = {
  isFavorite: true
};

export const OutLined = FavoriteSelectorTemplate.bind({});
OutLined.args = {
  isFavorite: false
};
