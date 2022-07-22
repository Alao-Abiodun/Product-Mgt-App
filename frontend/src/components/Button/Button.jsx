import React from 'react'
import styles from './Button.module.css'

function Button({disabled, children}) {
  return (
    <div className={styles.btnDiv}>
      <button disabled={disabled} className={styles.btn} >
        {children}
      </button>
    </div>
  );
}

export default Button;