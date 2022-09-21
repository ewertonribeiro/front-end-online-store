import '../styles/Button.css';

function Button({ text, ...rest }) {
  return (
    <button {...rest} className="button">
      {text}
    </button>
  );
}

export default Button;
