import { FormEvent, useState } from "react";
import styles from "./Filter.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [clientLatitude, setClientLatitude] = useState("")
  const [clientLongitude, setClientLongitude] = useState("")
  const [companyLatitude, setCompanyLatitude] = useState("")
  const [companyLongitude, setCompanyLongitude] = useState("")

  async function createClient(event: FormEvent) {
    event.preventDefault(); 

    const clientLatitudeNumber = Number(clientLatitude)
    const clientLongitudeNumber = Number(clientLongitude)
    const companyLatitudeNumber = Number(companyLatitude)
    const companyLongitudeNumber = Number(companyLongitude)

    const client = {
      name,
      email,
      telephone,
      clientLatitude: clientLatitudeNumber,
      clientLongitude: clientLongitudeNumber,
      companyLatitude: companyLatitudeNumber,
      companyLongitude: companyLongitudeNumber
    
    };

     await fetch("http://localhost:3333/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(client)
    });

    setName("")
    setEmail("")
    setTelephone("")
    setClientLatitude("")
    setClientLongitude("")
    setCompanyLatitude("")
    setCompanyLongitude("")


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

        <div>
          <label htmlFor="clientLatitude">Digite a latitude do cliente:</label>
          <input
            type="text"
            id="clientLatitude"
            placeholder="-13.8399225"
            value={clientLatitude}
            onChange={(event) => setClientLatitude(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="clientLongitude">Digite a longitude do cliente:</label>
          <input
            type="text"
            id="clientLongitude"
            placeholder="-13.8399225"
            value={clientLongitude}
            onChange={(event) => setClientLongitude(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="companyLatitude">Digite a latitude da empresa:</label>
          <input
            type="text"
            id="companyLatitude"
            placeholder="-13.8399225"
            value={companyLatitude}
            onChange={(event) => setCompanyLatitude(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="companyLongitude">Digite a longitude da empresa:</label>
          <input
            type="text"
            id="companyLongitude"
            placeholder="-13.8399225"
            value={companyLongitude}
            onChange={(event) => setCompanyLongitude(event.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  );
};

export default Form;
