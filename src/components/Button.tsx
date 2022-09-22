import { ButtonHTMLAttributes } from 'react';
import '../styles/Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function Button({ text, ...rest }: ButtonProps) {
  return (
    <button {...rest} className="button">
      {text}
    </button>
  );
}

export default Button;
