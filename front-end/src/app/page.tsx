import Image from "next/image";
import styles from "./page.module.css";
import Table from "./components/Table";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
           Gerenciamento de Clientes
        </h1>

       <section className={styles.containerButtons}>

        <button className={styles.button}>Cadastrar Cliente</button>
        <button className={styles.button}>Listar Clientes</button>
        <button className={styles.button}>Filtrar Clientes</button>
       </section>
     
         <Form />         <Table />
      </div>
    </main>
  );
}