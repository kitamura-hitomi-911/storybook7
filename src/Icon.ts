import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("ss-icon")
export class Icon extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    @import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    .material-symbols-outlined {
      font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 20;
      font-size: 20px;
      line-height: 1;
      width: 20px;
      height: 20px;
      overflow: hidden;
    }
    .material-symbols-outlined.is-large {
      font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
      font-size: 24px;
      line-height: 1;
      width: 24px;
      height: 24px;
      overflow: hidden;
    }
  `;

  @property({ type: String })
  name: string = "";

  @property({ type: String })
  sizeType: "" | "large" = "";

  // Render the UI as a function of component state
  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <span
        class="${classMap({
          "material-symbols-outlined": true,
          ["is-" + this.sizeType]: this.sizeType,
        })}"
      >
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ss-icon": Icon;
  }
}
