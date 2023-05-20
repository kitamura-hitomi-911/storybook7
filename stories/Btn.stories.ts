// Btn.stories.ts
import "@src/Btn";
import type { Meta, StoryObj } from "@storybook/web-components";
import { userEvent, within } from "@storybook/testing-library";
import { findByShadowRole, findByShadowText } from "shadow-dom-testing-library";
import { expect } from "@storybook/jest";
import { html } from "lit";

// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
    const rootElm = canvas.getByText<HTMLElementTagNameMap["ss-btn"]>("Button");
    const btnElm = await findByShadowRole(canvasElement, "button");
    const iconElm = await findByShadowText(btnElm, "add");
    expect(iconElm).toBeInTheDocument();
    userEvent.click(btnElm);
    rootElm.disabled = true;
    await sleep(100);
    expect(btnElm).toBeDisabled();
    rootElm.disabled = false;
    await sleep(100);
    expect(btnElm).toBeEnabled();
  },
};

export const Other: Story = {
  args: {
    disabled: false,
  },
};
