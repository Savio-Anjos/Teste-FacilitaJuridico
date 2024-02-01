import { Client, Prisma } from "@prisma/client";

export interface CustomersRepository {
  create(data: Prisma.ClientCreateInput): Promise<Client>;
  listAll(): Promise<Client[]>;
  findByEmail(email: string): Promise<Client[]>;
  findByName(name: string): Promise<Client[]>;
  findByTelephone(telephone: string): Promise<Client[]>;
}
