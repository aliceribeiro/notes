import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button.Primary,
  args: {
    children: "Button text"
  },
  argTypes: {}
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
