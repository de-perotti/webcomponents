import React from 'react';
import ReactDOM from 'react-dom';

export class BaseComponent extends HTMLElement {
  protected _buildProps() {
    return this.getAttributeNames().reduce((accumulator, attribute) => ({
      ...accumulator,
      [attribute]: this.getAttribute(attribute),
    }), {});
  }

  connectedCallback(funcComp: (props: any) => React.ReactElement) {
    ReactDOM.render(funcComp(this._buildProps()), this);
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}
