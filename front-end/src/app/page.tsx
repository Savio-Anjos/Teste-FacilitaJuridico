"use client"

import styles from "./page.module.css";
import Table from "./components/Table";
import Form from "./components/Form";
import Filter from "./components/Filter";
import { useState } from "react";

export default function Home() {

  const [isCreating, setIsCriating] = useState(true)
  const [isListing, setIsListing] = useState(false)
  const [isFiltering, setIsFiltering] = useState(false)

  function createClient() {
    setIsCriating(true)
    setIsListing(false)
    setIsFiltering(false)
  }

  function listCustomers() {
    setIsListing(true)
    setIsCriating(false)
    setIsFiltering(false)
  }

  function filterCustomers() {
    setIsFiltering(true)
    setIsListing(false)
    setIsCriating(false)
  }


  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
           Gerenciamento de Clientes
        </h1>

       <section className={styles.containerButtons}>

        <button className={styles.button} onClick={createClient}>Cadastrar Cliente</button>
        <button className={styles.button} onClick={listCustomers}>Listar Clientes</button>
        <button className={styles.button} onClick={filterCustomers}>Filtrar Clientes</button>
       </section>
     
         {isCreating && <Form />  } 
         {isListing && <Table />  }
         {isFiltering && <Filter />  }


     </div>
    </main>
  );
}