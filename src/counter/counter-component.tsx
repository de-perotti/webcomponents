import React from 'react';
import { BaseComponent } from '../base/base-component';
import { Counter } from './Counter';

export class CounterComponent extends BaseComponent {
  public static NAME = 'counter-component';

  connectedCallback() {
    super.connectedCallback(() => <Counter />);
  }
}

window.customElements.define(CounterComponent.NAME, CounterComponent);
