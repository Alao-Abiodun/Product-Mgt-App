import React from 'react';
import styles from './Button.module.css';
import backarrow from 'assets/backarrow.png';

const Button2 = ({ children }) => {
  return (
    <div className={styles.btn2Div}>
      <button className={styles.btn2}>
        <div className={styles.backhome}>
          <div className={styles.backarrow}>
            <img src={backarrow} alt="Home" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button2;
