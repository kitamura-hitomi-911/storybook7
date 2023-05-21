// Btn.stories.ts
import "@src/FormParts";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const meta: Meta = {
  title: "Form/Parts",
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    titleLabel: "項目名",
  },
  render: (args) =>
    html`<form-parts .titleLabel="${args.titleLabel}"
    ><form-input value="aa" placeholder="入力してください" /></-btn
  >`,
};
