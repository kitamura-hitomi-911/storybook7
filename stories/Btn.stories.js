// Btn.stories.ts
import "@/Btn";
import { html } from "lit";
const meta = {
    title: "Atoms/Btn",
    component: "ss-btn",
};
export default meta;
export const Default = {
    args: {
        label: "Button",
        disabled: false,
    },
    render: (args) => html `<ss-btn ?disabled=${args.disabled}>${args.label}</ss-btn>`,
};
export const Other = {
    args: {
        disabled: false,
    },
};
