import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Core/Card",
  component: Card,
  args: {
    title: "Card title",
    children: "This card uses the shared styles and layout primitives."
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {};
