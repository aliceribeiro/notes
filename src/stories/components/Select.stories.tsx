import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../../components/Select";

export default {
  title: "Components/Select",
  component: Select,
  arg: {},
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Default: StoryObj = {};
