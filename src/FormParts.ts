import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("form-parts")
export class FormParts extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    input {
      border: 1px solid #999;
      border-radius: 4px;
      min-height: 42px;
      &:disabled {
        background-color: #ccc;
      }
    }
  `;

  @property({ type: String })
  type: "text" | "password" = "text";

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  titleLabel: string = "";

  @property({ type: String })
  placeholder: string = "";

  @property({ type: String })
  widthType: "" | "auto" = "";

  handleClick(e: Event) {
    console.log(e);
    // this.disabled = true;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <dl>
        ${this.titleLabel ? html`<dt>${this.titleLabel}</dt>` : ""}
        <dd>
          <slot></slot>
        </dd>
      </dl>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "form-parts": FormParts;
  }
}
