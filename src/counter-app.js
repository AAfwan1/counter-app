import { LitElement, html, css } from 'lit';

/**
 * A complete card component with slots, collapsible details, and custom properties
 */

export class MyCard extends LitElement {
  // Define the tag name for the custom element
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Card Title";
    this.image = "https://via.placeholder.com/150";
    this.details = "This is the default card details.";
    this.expanded = false; // Default collapsed state
  }

  // Define CSS styles scoped to this component
  static get styles() {
    return css`
      :host {
        display: block;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        width: 300px;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: var(--card-bg-color, white);
      }

      img {
        width: 100%;
        height: auto;
      }

      .card-header {
        padding: 16px;
        background-color: var(--header-bg-color, #0054a4);
        color: var(--header-text-color, white);
        font-size: 1.25em;
        font-weight: bold;
        text-align: center;
      }

      .card-body {
        padding: 16px;
      }

      .details {
        margin-top: 8px;
        color: #333;
        font-size: 0.9em;
      }

      button {
        margin-top: 16px;
        padding: 8px 12px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
      }

      button:hover {
        background-color: #0056b3;
      }
    `;
  }

  // Define properties that can be reflected to attributes
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      details: { type: String },
      expanded: { type: Boolean },
    };
  }

  // Toggle the visibility of the details section
  toggleDetails() {
    this.expanded = !this.expanded;
  }

  // Render the HTML structure of the card
  render() {
    return html`
      <div>
        ${this.image ? html`<img src="${this.image}" alt="${this.title}" />` : ''}
        <div class="card-header">${this.title}</div>
        <div class="card-body">
          <slot></slot>
          <button @click="${this.toggleDetails}">
            ${this.expanded ? 'Hide Details' : 'Show Details'}
          </button>
          ${this.expanded ? html`<p class="details">${this.details}</p>` : ''}
        </div>
      </div>
    `;
  }
}

// Register the custom element with the browser
globalThis.customElements.define(MyCard.tag, MyCard);
