import { NotificationButton } from '../NotificationButton';
import styles from './SalesCard.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export const SalesCard = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(new Date());

  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>Vendas</h2>
        <div>
          <div className={styles.formControlContainer}>
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => {
                setMinDate(date);
              }}
              className={styles.formControl}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className={styles.formControlContainer}>
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => {
                setMaxDate(date);
              }}
              className={styles.formControl}
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        <div>
          <table className={styles.salesTable}>
            <thead>
              <tr>
                <th className={styles.show992}>ID</th>
                <th className={styles.show576}>Data</th>
                <th>Vendedor</th>
                <th className={styles.show992}>Visitas</th>
                <th className={styles.show992}>Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.show992}>#341</td>
                <td className={styles.show576}>08/07/2022</td>
                <td>Anakin</td>
                <td className={styles.show992}>15</td>
                <td className={styles.show992}>11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className={styles.redBtnContainer}>
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.show992}>#341</td>
                <td className={styles.show576}>08/07/2022</td>
                <td>Anakin</td>
                <td className={styles.show992}>15</td>
                <td className={styles.show992}>11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className={styles.redBtnContainer}>
                    <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.show992}>#341</td>
                <td className={styles.show576}>08/07/2022</td>
                <td>Anakin</td>
                <td className={styles.show992}>15</td>
                <td className={styles.show992}>11</td>
                <td>R$ 55300.00</td>
                <td>
                  <div className={styles.redBtnContainer}>
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
