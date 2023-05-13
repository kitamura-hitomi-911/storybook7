// Btn.stories.ts
import "./Btn";
import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Atoms/Btn",
  component: "ss-btn",
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Button",
    disabled: false,
  },
  render: (args) =>
    html`<ss-btn ?disabled=${args.disabled}>${args.label}</ss-btn>`,
};

export const Other: Story = {
  args: {
    disabled: false,
  },
};
