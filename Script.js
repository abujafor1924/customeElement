class MyButton extends HTMLElement {
  constructor() {
    super();
    this.sedow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const button = document.createElement("button");
    button.innerHTML = this.innerHTML;
    this.sedow.append(this.#createStyle());
    this.sedow.append(button);

    //     const button = `
    //     <style>
    //     button {
    //       background: #000;
    //       color: aliceblue;
    //     }
    //   </style>
    //    <button>${this.innerHTML}</button>
    //    `;
    //     this.innerHTML = button;
  }

  attributeChangedCallback() {
    console.log("Custom square element attributes changed.");
  }

  disconnectedCallback() {
    console.log("Custom square element removed from page.");
  }

  #createStyle() {
    const style = document.createElement("style");
    style.innerText = `
     button {
               background: #F60000;
               padding: 5px 10px 5px 10px;
               color: aliceblue;
              }
     `;
    return style;
  }
}
customElements.define("my-button", MyButton);

document.querySelector("my-button").addEventListener("click", () => {
  alert("clickd  my-button");
});
