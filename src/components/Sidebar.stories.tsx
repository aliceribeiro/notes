import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { Lock } from "phosphor-react";

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
