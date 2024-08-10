/* eslint-disable react/prop-types */
const Button = (props) => {
  const { text = "Test button", bg, color, onClick, disabled, type, className } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ background: bg, color: color }}
      type={type}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
