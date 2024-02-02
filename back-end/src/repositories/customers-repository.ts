import { Client, Prisma } from "@prisma/client";

export interface CustomersRepository {
  create(data: Prisma.ClientCreateInput): Promise<Client>;
  listAll(): Promise<Client[]>;
  filterByEmail(email: string): Promise<Client[]>;
  filterByName(name: string): Promise<Client[]>;
  filterByTelephone(telephone: string): Promise<Client[]>;
  findByEmail(email: string): Promise<Client | null>;
}
