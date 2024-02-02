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
        companyLatitude: data.companyLatitude,
        companyLongitude: data.companyLongitude,
        clientLatitude: data.clientLatitude,
        clientLongitude: data.clientLongitude,
        distance: data.distance,
      },
    });

    return client;
  }

  public async listAll(): Promise<Client[]> {
    const customers = await prisma.client.findMany();

    return customers;
  }

  public async filterByEmail(email: string): Promise<Client[]> {
    const customers = await prisma.client.findMany({
      where: {
        email: email,
      },
    });

    return customers;
  }

  public async filterByName(name: string): Promise<Client[]> {
    const customers = await prisma.client.findMany({
      where: {
        name: name,
      },
    });

    return customers;
  }
  public async filterByTelephone(telephone: string): Promise<Client[]> {
    const customers = await prisma.client.findMany({
      where: {
        telephone: telephone,
      },
    });

    return customers;
  }

  public async findByEmail(email: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        email,
      },
    });

    return client;
  }
}
