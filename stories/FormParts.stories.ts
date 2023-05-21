// FormParts.stories.ts
import "@src/FormParts";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { FormParts } from "@/types/form";

const meta: Meta<FormParts> = {
  title: "Form/Parts",
  argTypes: {
    titleLabel: { control: "text" },
    formName: {
      control: "inline-radio",
      options: ["form-input", "form-radio", "form-checkbox", "form-select"],
    },
    formData: {
      control: "object",
    },
  },
};
export default meta;

type Story = StoryObj<FormParts>;

export const Default: Story = {
  args: {
    titleLabel: "項目名",
    formName: "form-input",
    formData: {
      value: "aa",
      placeholder: "aa",
    },
  },
  render: (args) =>
    html`<form-parts
      .titleLabel="${args.titleLabel}"
      .formName="${args.formName}"
      .formData="${args.formData}"
    ></form-parts>`,
};
