"use client";
import styles from "./page.module.css";
import Table from "./components/Table";
import Form from "./components/Form";
import Filter from "./components/Filter";
import { useState } from "react";
import TableDistance from "./components/TableDistance";

export interface Customer {
  id: string
  name: string;
  email: string;
  telephone: string;
  clientLatitude: number;
  clientLongitude: number;
  companyLatitude: number;
  companyLongitude: number;
  distance: number
}

export default function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const [isListing, setIsListing] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isDistance, setIsDistance] = useState(false)
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null>(null);

  async function createClient() {
    setIsCreating(true);
    setIsListing(false);
    setIsFiltering(false);
    setIsDistance(false);

  }

  async function listCustomers() {
    setIsListing(true);
    setIsCreating(false);
    setIsFiltering(false);
    setIsDistance(false);

      const response = await fetch("http://localhost:3333/customers")

      const data = await response.json();

      setCustomers(data.customers as Customer[]);


      console.log(customers)
   
  }

  async function filterCustomers() {
    setIsFiltering(true);
    setIsListing(false);
    setIsCreating(false);
  }

  async function distanceCustomers() {
    setIsDistance(true);
    setIsListing(false);
    setIsCreating(false);
    setIsFiltering(false)
  }


  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Gerenciamento de Clientes
        </h1>

        <section className={styles.containerButtons}>
          <button
            className={styles.button}
            onClick={createClient}
          >
            Cadastrar Cliente
          </button>
          <button
            className={styles.button}
            onClick={listCustomers}
          >
            Listar Clientes
          </button>
          <button
            className={styles.button}
            onClick={filterCustomers}
          >
            Filtrar Clientes
          </button>

          <button
            className={styles.button}
            onClick={distanceCustomers}
          >
            Buscar próximos
          </button>
  
        </section>

        {isCreating && <Form />}
        {isListing && <Table customers={customers} />}
        {isFiltering && <Filter />}
        {isDistance && <TableDistance customers={customers} />}
      </div>
    </main>
  );
}