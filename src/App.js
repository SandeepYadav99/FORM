import React from "react";
import InputForm from "./FormInput/InputForm";
import styles from "./App.module.css"
const App = () => {
  return (
    <div className={styles["main-container"]}>
      <InputForm />
    </div>
  );
};

export default App;
