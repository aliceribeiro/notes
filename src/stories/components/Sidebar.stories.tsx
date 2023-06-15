import { Meta, StoryObj } from "@storybook/react";
import { Lock } from "phosphor-react";
import { Sidebar } from "../../components/Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  args: {
    children: (
      <>
        <Lock />
        <span>Item 1</span>
      </>
    )
  },
  argTypes: {}
} as Meta;

export const Default: StoryObj = {};
