import React from 'react';
import classNames from 'classnames';
import './button.scss';

export const Button = ({ className, text, ...props }: React.ComponentProps<'button'> & any) => (
  <button
    type="button"
    {...props}
    className={classNames(className, 'button')}
  >
    {text}
  </button>
);
