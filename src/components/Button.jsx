import '../styles/Button.css';

const Button = ({ text, ...rest }) => {
  return (
    <button {...rest} className="button">
      {text}
    </button>
  )
}

export default Button
