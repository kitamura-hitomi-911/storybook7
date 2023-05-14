import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./Icon";

@customElement("ss-btn")
export class Btn extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      color: #fff;
      background-color: #000;
      &:disabled {
        background-color: #ccc;
      }
    }
  `;

  @property({ type: String })
  icon: string = "";

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  sizeType: "" | "large" = "";

  @property({ type: String })
  widthType: "" | "long" = "";

  // Render the UI as a function of component state
  render() {
    return html`
      <button ?disabled="${this.disabled}">
        ${this.icon
          ? html`<ss-icon sizeType="${this.sizeType}">${this.icon}</ss-icon>`
          : ""}<slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ss-btn": Btn;
  }
}
