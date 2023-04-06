import { ComponentStory } from "@storybook/react";
import InsightsBadge from "../../../insights/components/primitives/InsightBadge/insight-badge";

const storyConfig = {
  title: "Design System/Insights/Primitives/InsightsBadge"
};

export default storyConfig;

const BadgeTemplate: ComponentStory<typeof InsightsBadge> = (args) => <InsightsBadge {...args} />;

export const isPublic = BadgeTemplate.bind({});
isPublic.args = { isPublic: true };
export const isPrivate = BadgeTemplate.bind({});
isPrivate.args = { isPublic: false };
