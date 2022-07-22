export const inputChangeHandler = (
  event,
  elementID,
  formType,
  updateFunction,
  setFormValid
) => {
  let passwordValue = formType["password"] ?  formType["password"].value : null;
  let isValid = true;
  let msg = "";
  for (let validation of formType[elementID].validations) {
    isValid = validation(event.target.value, passwordValue).isTrue && isValid;
    msg = validation(event.target.value, passwordValue).msg;
  }
  const updatedFormElement = {
    ...formType[elementID],
    value: event.target.value,
    isValid: isValid,
    touched: true,
    errorMessage: msg,
  };
  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };
  let formIsValid = true;
  for (let inputIdentifier in updatedForm) {
    formIsValid = updatedForm[inputIdentifier].isValid && formIsValid;
  }

  return {
    changeHandler: updateFunction(updatedForm),
    formHandler: setFormValid(formIsValid),
  };
};

export const handleBlur = (event, elementID, formType, updateFunction) => {
  const updatedFormElement = {
    ...formType[elementID],
    blur: true,
  };

  const updatedForm = {
    ...formType,
    [elementID]: updatedFormElement,
  };

  return updateFunction(updatedForm);
};
