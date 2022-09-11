import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import styles from './NotificationButton.module.css';

type Props = {
  saleId: number;
};

export const NotificationButton = ({ saleId }: Props) => {
  function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then((res) =>
      toast.info('SMS enviado com sucesso'),
    );
  }

  return (
    <div className={styles.redBtn} onClick={() => handleClick(saleId)}>
      <img src={icon} alt="notificar" />
    </div>
  );
};
