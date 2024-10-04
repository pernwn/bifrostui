// index.js
import React from "react";
import ReactDOM from "react-dom";
import { PrimaryBtn, UrlBtn, ToggleBtn } from "./interface/buttons.jsx";
import { createRoot } from "react-dom/client";


const root = createRoot(components);
const components = [
  { name: "PrimaryBtn", component: PrimaryBtn },
  { name: "UrlBtn", component: UrlBtn },
  { name: "ToggleBtn", component: ToggleBtn },
];



components.forEach(({ name, component }) => {
  class WebComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      const text = this.getAttribute("text") || "Default Text";
      const url = this.getAttribute("url") || "#";
      const style = this.getAttribute("style") || "";
      const className = this.getAttribute("class") || "";
      const icon = this.getAttribute("icon") || ""; // Kun for PrimaryBtn
      const click = () =>
        this.dispatchEvent(new CustomEvent("click", { detail: "clicked" }));

      // Dynamisk oprettelse af React-komponent
      root.render(
        React.createElement(component, {
          text,
          url,
          style,
          className,
          icon,
          click,
        }),
        this.shadowRoot
      );
    }
  }

  // Definer Web Component
  customElements.define(name, WebComponent);
});
