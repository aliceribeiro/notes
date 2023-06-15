import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../components/Text";
import { Checkbox, CheckboxProps } from "../../components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Checkbox text</Text>
        </div>
      );
    }
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
