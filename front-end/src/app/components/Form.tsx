import { FormEvent, useState } from "react";
import styles from "./Filter.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  async function createClient(event: FormEvent) {
    event.preventDefault(); 

    const client = {
      name,
      email,
      telephone
    };

     await fetch("http://localhost:3333/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(client)
    });

  }

  return (
    <section className={styles.containerForm}>
      <form className={styles.form} onSubmit={createClient}>
        <div>
          <label htmlFor="name">Digite o nome do cliente:</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Digite o email do cliente:</label>
          <input
            type="text"
            id="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="telephone">Digite o telefone do cliente:</label>
          <input
            type="text"
            id="telephone"
            placeholder="73 998536538"
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};

export default Form;
