const Button = (props) => {
  return (
    <button onClick={props.onclick} className="button">
      {props.children}
    </button>
  );
};

export default Button;
