import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.LogoContainer}>
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </header>
  );
};
