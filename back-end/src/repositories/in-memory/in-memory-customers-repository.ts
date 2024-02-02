import { Client, Prisma } from "@prisma/client";
import { CustomersRepository } from "../customers-repository";
import { randomUUID } from "crypto";

export class InMemoryCustomersRepository implements CustomersRepository {
  private customers: Client[] = [];
  public async create(data: Prisma.ClientCreateInput): Promise<Client> {
    const client = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      telephone: data.telephone,
    };

    this.customers.push(client);

    return client;
  }
  public async listAll(): Promise<Client[]> {
    return this.customers;
  }
  public async filterByEmail(email: string): Promise<Client[]> {
    const customers = this.customers.filter((client) => client.email === email);

    return customers;
  }
  public async filterByName(name: string): Promise<Client[]> {
    const customers = this.customers.filter((client) => client.name === name);

    return customers;
  }
  public async filterByTelephone(telephone: string): Promise<Client[]> {
    const customers = this.customers.filter(
      (client) => client.telephone === telephone
    );

    return customers;
  }

  public async findByEmail(email: string): Promise<Client | null> {
    const client = this.customers.find((client) => client.email === email);

    if (!client) {
      return null;
    }

    return client;
  }
}
