// Btn.stories.ts
import "@/Btn";
import type { Meta, StoryObj } from "@storybook/web-components";
import { userEvent, within } from "@storybook/testing-library";
import { findByShadowRole, findByShadowText } from "shadow-dom-testing-library";
import { expect } from "@storybook/jest";
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
    icon: "add",
  },
  render: (args) =>
    html`<ss-btn ?disabled=${args.disabled} .icon="${args.icon}"
      >${args.label}</ss-btn
    >`,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // const rootElm = canvas.getByText("Button");
    const btnElm = await findByShadowRole(canvasElement, "button");
    const iconElm = await findByShadowText(btnElm, "add");
    console.log(iconElm);
    await userEvent.click(btnElm);
    expect(btnElm).toBeDisabled();
  },
};

export const Other: Story = {
  args: {
    disabled: false,
  },
};
