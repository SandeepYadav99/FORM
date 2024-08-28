import React, { useCallback, useState } from "react";

const useInputFormHook = () => {
  const [errorData, setErrorData] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const checkFormValidation = useCallback(() => {
    const errors = { ...errorData };
    let required = ["name", "email", "password"];
    required.forEach((val) => {
      if (
        !form?.[val] ||
        (Array.isArray(form?.[val]) && form?.[val].length === 0)
      ) {
        errors[val] = true;
      } else if (["code"].indexOf(val) < 0) {
        delete errors[val];
      }
    });

    Object.keys(errors).forEach((key) => {
      if (!errors[key]) {
        delete errors[key];
      }
    });

    return errors;
  }, [form, errorData]);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      const errors = checkFormValidation();
      if (Object.keys(errors).length > 0) {
        setErrorData(errors);
        return;
      }

      setForm((prev) => {
        return {
          ...prev,
          name: "",
          email: "",
          password: "",
        };
      });
    },
    [checkFormValidation, form, setErrorData, setForm]
  );

  return {
    form,
    onChangeHandler,
    submitHandler,
    errorData
  };
};

export default useInputFormHook;
