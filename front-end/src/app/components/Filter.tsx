import styles from "./Filter.module.css"

const Filter = () => {
  return (
   <section className={styles.containerForm}>
    <form  className={styles.form}>
       <div>
       <label htmlFor="filterCategory">
            Selecione um parâmetro para filtar: 
        </label>
        <select  id="filterCategory" >
            <option value="name">Nome</option>
            <option value="email">Email</option>
            <option value="telephone">Telefone</option>
        </select>
       </div>

       <div>
       <label htmlFor="filter">
            Digite o filtro: 
        </label>
        <input  type="text" id="filter" placeholder="johndoe@example.com" />
       </div>

     
       <button>Cadastrar</button>
    </form>
   </section>
  )
}

export default Filter
