import { Client, Prisma } from "@prisma/client";
import { CustomersRepository } from "../customers-repository";
import { prisma } from "@/lib/prisma";

export class PrismaCustomersRepository implements CustomersRepository {
  public async create(data: Prisma.ClientCreateInput): Promise<Client> {
    const client = await prisma.client.create({
      data: {
        name: data.name,
        email: data.email,
        telephone: data.telephone,
      },
    });

    return client;
  }

  public async listAll(): Promise<Client[]> {
    const customers = await prisma.client.findMany();

    return customers;
  }

  public async findByEmail(email: string): Promise<Client[]> {
    const customers = await prisma.client.findMany({
      where: {
        email: email,
      },
    });

    return customers;
  }
  public async findByName(name: string): Promise<Client[]> {
    const customers = await prisma.client.findMany({
      where: {
        name: name,
      },
    });

    return customers;
  }
  public async findByTelephone(telephone: string): Promise<Client[]> {
    const customers = await prisma.client.findMany({
      where: {
        telephone: telephone,
      },
    });

    return customers;
  }
}
