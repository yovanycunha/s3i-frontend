import { ReactNode } from 'react';

import style from './Button.module.scss';

interface IButtonProps {
  type: 'button' | 'submit';
  disabled?: boolean;
  children: ReactNode;
}

const Button = (props: IButtonProps) => {
  const btnClass = [style.button];
  return (
    <button
      type={props.type === 'submit' ? 'submit' : 'button'}
      className={btnClass.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
