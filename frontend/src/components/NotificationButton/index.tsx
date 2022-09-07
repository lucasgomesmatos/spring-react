import icon from '../../assets/notification-icon.svg';
import styles from './NotificationButton.module.css';

export const NotificationButton = () => {
  return (
    <div className={styles.redBtn}>
      <img src={icon} alt="notificar" />
    </div>
  );
};
