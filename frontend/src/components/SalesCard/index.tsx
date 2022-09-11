import { NotificationButton } from '../NotificationButton';
import styles from './SalesCard.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SalesCard = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(new Date());
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dmin = minDate.toISOString().slice(0, 10);
    const dmax = minDate.toISOString().slice(0, 10);

    axios
      .get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=2021-12-31`)
      .then((res) => setSales(res.data.content));
  }, [maxDate, minDate]);

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
              {sales.map(({ id, date, sellerName, visited, deals, amount }) => (
                <tr key={id}>
                  <td className={styles.show992}>{id}</td>
                  <td className={styles.show576}>
                    {new Date(date).toLocaleDateString()}
                  </td>
                  <td>{sellerName}</td>
                  <td className={styles.show992}>{visited}</td>
                  <td className={styles.show992}>{deals}</td>
                  <td>R$ {amount.toFixed(2)}</td>
                  <td>
                    <div className={styles.redBtnContainer}>
                      <NotificationButton saleId={id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
