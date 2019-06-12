import React from 'react';
import { Button } from './Button';
import { BaseComponent } from '../base/base-component';

export class ButtonComponent extends BaseComponent {
  public static NAME = 'button-component';

  connectedCallback() {
    super.connectedCallback((props: React.ComponentProps<'button'>) => (
      <Button {...props}>
        <slot />
      </Button>
    ));
  }
}

window.customElements.define(ButtonComponent.NAME, ButtonComponent);
