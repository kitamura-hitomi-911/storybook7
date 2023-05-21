import "@src/FormInput";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Form/Input",
  component: "form-input",
};
export default meta;

type Story = StoryObj;

export const Text: Story = {
  args: {
    value: "テキスト",
    disabled: false,
    type: "text",
  },
};
