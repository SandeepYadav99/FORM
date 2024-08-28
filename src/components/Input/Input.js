import React from "react";
import styles from './Input.module.css'

const Input = ({ errorText, ...rest }) => {

  return (
    <div>
      <input   className={errorText ? styles['input-error'] : styles['input-filed']} {...rest} />
      {/* {errorText && <p className={styles.errorMessage}>{errorText}</p>} */}
    </div>
  );
};

export default Input;
