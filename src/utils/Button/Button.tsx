import { FC, PropsWithChildren } from 'react';
import { ButtonStyles } from './button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <button {...props} className={ButtonStyles()}>
      {children}
    </button>
  );
};

export default Button;
