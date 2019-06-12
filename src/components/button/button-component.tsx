import React from 'react';
import { Button, ButtonProps } from './Button';
import { BaseComponent } from '../base/base-component';

export class ButtonComponent extends BaseComponent {
  public static NAME = 'button-component';

  connectedCallback() {
    super.connectedCallback((props: ButtonProps) => (
      <Button {...props}>
        {props.text}
      </Button>
    ));
  }
}

window.customElements.define(ButtonComponent.NAME, ButtonComponent);
