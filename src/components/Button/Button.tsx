import { type ButtonHTMLAttributes, type FC } from 'react';
import cx from 'classnames';

import s from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary';
  /**
   * With white or transparent background
   */
  outline?: boolean;
}

/**
 * This is a Button  Component
 */

const Button: FC<IButton> = ({
  label,
  variant = 'primary',
  outline = false,
  ...props
}) => {
  return (
    <button
      className={cx(s.button, s[variant], {
        [s[`${variant}__outline`]]: outline,
      })}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
