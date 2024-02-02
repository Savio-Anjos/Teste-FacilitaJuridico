import React from 'react';
import styles from "./Table.module.css";

import { Customer } from '../page';

interface TableProps {
  customers: Customer[];
}

const Table: React.FC<TableProps> = ({ customers }) => {
  return (
    <section className={styles.containerTable}>
      <table className={styles.table}>
        <tbody> 
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
          {customers.map((client) => {
            return (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.telephone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
