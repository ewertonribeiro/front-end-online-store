import { ButtonHTMLAttributes } from 'react';
import '../styles/Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  categorie?: boolean;
}

function Button({ text, categorie, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={`button ${categorie && 'button-categorie'}`}>
      {text}
    </button>
  );
}

export default Button;
