/* eslint-disable react/prop-types */
const Button = (props) => {
  const { text = "Test button", bg, color, onClick, disabled } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ background: bg, color: color }}
    >
      {text}
    </button>
  );
};

export default Button;
