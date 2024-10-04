// index.js
import React from "react";
import { bifrostPrimary, bifrostUrl, bifrostToggle } from "./interface/buttons.jsx";3
import { createRoot } from "react-dom/client";

const components = [
  { name: "primary-btn", component: bifrostPrimary },
  { name: "url-btn", component: bifrostUrl },
  { name: "toggle-btn", component: bifrostToggle },
];

components.forEach(({ name, component }) => {
  class WebComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" })
      this.root = createRoot(this.shadowRoot);
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
      this.root.render(
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
