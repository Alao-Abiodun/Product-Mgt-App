import styles from './auth.module.css';
import { Link } from 'react-router-dom';
import Logo from 'assets/Logo.svg';
import Auth_Bg from 'assets/Auth_img.png';
import Button from 'components/Button/Button2';

const Auth = ({ props, children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.whiteBg}>
        <Link to="/">
          <Button />
        </Link>
        <Link to="/" className={styles.logoContainer}>
          <div className={styles.image}>
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div>{children}</div>
      </div>
      <div className={styles.AuthBg}>
        <img src={Auth_Bg} alt="EasyRent" />
      </div>
    </main>
  );
};

export default Auth;
