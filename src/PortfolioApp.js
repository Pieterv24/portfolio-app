import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class PortfolioApp extends LitElement {
  static get properties() {
    return {
    };
  }

  render() {
    return html`
      <h1>Hello World</h1>
    `;
  }
}
