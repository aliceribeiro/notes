import { Meta, StoryObj } from "@storybook/react";
import { Tag, TagProps } from "../../components/Tag";

export default {
  title: "Components/Tag",
  component: Tag,
  args: {
    children: "Pessoal"
  }
} as Meta<TagProps>;

export const Default: StoryObj<TagProps> = {};
