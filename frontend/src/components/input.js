const Input = (props) => {
  let inputClasses = ["form-input"];
  let textClasses = ["form-input", "form-textarea"];
  if (
    (props.blur && !props.isValid) ||
    (!props.isValid && !props.formIsValid && props.clicked)
  ) {
    inputClasses.push("form-invalid");
    textClasses.push("form-invalid");
  } else if (props.isValid && props.blur) {
    inputClasses.push("form-valid");
    textClasses.push("form-valid");
  }
  let inputElement;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          onBlur={props.onblur}
          id={props.label}
          className={inputClasses.join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.onchange}
          name={props.label}
          disabled={props.disabled}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onBlur={props.onblur}
          id={props.label}
          {...props.config}
          value={props.value}
          onChange={props.onchange}
          name={props.label}
          className={textClasses.join(" ")}
          rols="5"
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        <select
          onBlur={props.onblur}
          id={props.label}
          value={props.value}
          onChange={props.onchange}
          className={inputClasses.join(" ")}
          // multiple="multiple"
        >
          {props.config.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onBlur={props.onblur}
          id={props.label}
          className={inputClasses.join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.onchange}
          name={props.label}
        />
      );
      break;
  }

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.label}>
        {props.label}
      </label>
      {inputElement}
      <span
        style={{
          color: "red",
          display: "inline-block",
          textAlign: "start",
          fontSize: "12px",
          width: "100%",
        }}
      >
        {(!props.isValid && props.blur) ||
        (!props.isValid && !props.formIsValid && props.clicked)
          ? props.message
          : ""}
      </span>
    </div>
  );
};

export default Input;
