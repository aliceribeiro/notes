import { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "../../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Título",
    date: "24 de abril de 2023",
    categories: ["Categoria"],
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    handleDelete: () => console.log("Cliquei na lixeira")
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {};
