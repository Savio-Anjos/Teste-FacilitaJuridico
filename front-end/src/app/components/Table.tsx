import React from 'react'
import styles from "./Table.module.css";

const Table = () => {
  return (
    <section className={styles.containerTable}>
    <table className={styles.table}>
<tr>
 <th>Nome</th>
 <th>Email</th>
 <th>Telefone</th>
</tr>
<tr>
 <td>João Silva</td>
 <td>joao@example.com</td>
 <td>(11) 98765-4321</td>
</tr>
<tr>
 <td>Maria Souza</td>
 <td>maria@example.com</td>
 <td>(22) 12345-6789</td>
</tr>

</table>
    </section>
  )
}

export default Table
