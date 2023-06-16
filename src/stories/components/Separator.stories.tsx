import { Meta, StoryObj } from "@storybook/react";
import { Separator, SeparatorRootProps } from "../../components/Separator";

export default {
  title: "Components/Separator",
  component: Separator.Root,
  args: {
    children: [<Separator.Line />]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<SeparatorRootProps>;

export const Default: StoryObj<SeparatorRootProps> = {};

export const WithText: StoryObj<SeparatorRootProps> = {
  args: {
    children: <Separator.Text text="ou" />
  }
};
