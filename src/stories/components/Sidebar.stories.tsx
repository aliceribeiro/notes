import { Meta, StoryObj } from "@storybook/react";
import { Sidebar, SidebarProps } from "../../components/Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  args: {
    hanldeExit: () => console.log("Cliquei em sair")
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<SidebarProps>;

export const Default: StoryObj<SidebarProps> = {};
