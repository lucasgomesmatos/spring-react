import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.LogoContainer}>
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
      </div>
    </header>
  );
};
