class wordCount extends HTMLParagraphElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const count = this.#wordCount(this.parentNode);

    const span = document.createElement("span");
    span.textContent = "word = " + count;

    this.shadow.append(span);
  }

  #wordCount(node) {
    const text = node.innerText || node.textContent;
    return text
      .trim()
      .split(/\s+/g)
      .filter((a) => a.trim().length > 0).length;
  }
}

customElements.define("word-count", wordCount, {
  extends: "p",
});
