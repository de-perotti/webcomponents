import React from 'react';
import ReactDOM from 'react-dom';

export class BaseComponent extends HTMLElement {
  protected _mountPoint = document.createElement('div');

  protected _buildProps() {
    return this.getAttributeNames().reduce((accumulator, attribute) => ({
      ...accumulator,
      [attribute]: this.getAttribute(attribute),
    }), {});
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).appendChild(this._mountPoint);
  }

  connectedCallback(funcComp: (props: any) => React.ReactElement) {
    const props = this._buildProps();

    ReactDOM.render(<div>{funcComp(props)}</div>, this._mountPoint as any);
  }
}
