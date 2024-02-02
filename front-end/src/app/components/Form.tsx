import styles from "./Filter.module.css"

const Form = () => {
  return (
   <section className={styles.containerForm}>
    <form  className={styles.form}>
       <div>
       <label htmlFor="name">
            Digite o nome do cliente: 
        </label>
        <input  type="text" id="name" placeholder="John Doe" />
       </div>

       <div>
       <label htmlFor="email">
            Digite o email do cliente: 
        </label>
        <input  type="text" id="email" placeholder="johndoe@example.com" />
       </div>

       <div>
       <label htmlFor="telephone">
            Digite o telefone do cliente: 
        </label>
        
        <input  type="text" id="email" placeholder="73 998536538" />
       </div>

       <button>Cadastrar</button>
    </form>
   </section>
  )
}

export default Form
