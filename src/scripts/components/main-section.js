class MainSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="movie-list" class="mt-5"></div>
        `;
  }
}

customElements.define("main-section", MainSection);
