import { FormEvent, useState } from "react";
import styles from "./Filter.module.css";
import { Customer } from "../page";
import Table from "./Table";



const Filter = () => {
  const [parameter, setParameter] = useState<string>("name");
  const [filter, setFilter] = useState<string>();
  const [tableIsVisible, setTableIsVisible] = useState<boolean>(false)
  const [customers, setCustomers] = useState<Customer[]>([]);
  async function filterCustomers(event: FormEvent) {

    event.preventDefault();

    const response = await fetch(`http://localhost:3333/customers/filter/${parameter}/${filter}`)

    const data = await response.json();

    console.log(data)

    setCustomers(data.customers as Customer[])
    setTableIsVisible(true)

  console.log(response)

 
   
    console.log(parameter)
  }

  return (
    <>
    <section className={styles.containerForm}>
      <form className={styles.form}>
        <div>
          <label htmlFor="filterCategory">
            Selecione um parâmetro para filtar:
          </label>
          <select id="filterCategory" onChange={(event) => setParameter(event.target.value as string)}>
            <option value="name">Nome</option>
            <option value="email">Email</option>
            <option value="telephone">Telefone</option>
          </select>
        </div>

        <div>
          <label htmlFor="filter">
            Digite o filtro:
          </label>
          <input  
           type="text"
           id="filter" 
           placeholder="Digite o filtro" 
           value={filter} 
           onChange={(event) => setFilter(event.target.value)} />
        </div>

        <button onClick={filterCustomers}>Filtrar</button>
      </form>

      

    </section>
    <Table customers={customers}/>
    </>
    
  );
};

export default Filter;