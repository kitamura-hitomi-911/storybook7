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
      background-color: var(--primary);
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

  handleClick(e: Event) {
    console.log(e);
    // this.disabled = true;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <button
        role="button"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
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
