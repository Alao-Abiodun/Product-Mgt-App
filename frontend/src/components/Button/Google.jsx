import React from 'react';
import styles from './Button.module.css';
import google from 'assets/google-icon.png';

function Google() {
  return (
    <div className={styles.googlediv}>
      <div className={styles.or}>
        <div></div>
        <h1>OR</h1>
        <div></div>
      </div>
      <button className={styles.google}>
        <div className={styles.googleCont}>
          <div className={styles.googleDiv}>
            <img src={google} alt="google" />
          </div>
          <div className={styles.p3}>Continue with Google</div>
        </div>
      </button>
    </div>
  );
}

export default Google;
