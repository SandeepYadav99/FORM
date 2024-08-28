import React, { useState } from "react";
import styles from "./InputForm.module.css";
import Input from "../components/Input/Input";
import useInputFormHook from "./InputFormHook";

const InputForm = () => {

  const { form, onChangeHandler, submitHandler , errorData} = useInputFormHook();

  const nameIsValid = form?.name.trim() !== "";
  const emailIsValid = form?.email.trim() !== "";
  const passwordIsValid = form?.password.trim() !== "";
console.log(errorData)
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={"formFlex"}>
        <div className={"formGroup"}>
          <Input
            type={"text"}
            placeholder={"Name"}
            name={"name"}
            value={form.name}
            onChange={onChangeHandler}
             errorText={errorData.name }
          />
        </div>
      </div>
      <div className={"formFlex"}>
        <div className={"formGroup"}>
          <Input
            type={"email"}
            placeholder={"Email"}
            name={"email"}
            value={form.email}
            onChange={onChangeHandler}
            errorText={errorData.email }
          />
        </div>
      </div>
      <div className={"formFlex"}>
        <div className={"formGroup"}>
          <Input
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            value={form.password}
            onChange={onChangeHandler}
            errorText={errorData.password }
          />
        </div>
      </div>
      <div className={"formFlex"}>
        <div className={"formGroup"}>
          <button type="submit" className={styles.actions}>
            SUBMIT
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
