import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";

interface ListAllCustomersUseCaseResponse {
  customers: Client[];
}

export class ListAllCustomersUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  public async execute(): Promise<ListAllCustomersUseCaseResponse> {
    const customers = await this.customersRepository.listAll();

    return { customers };
  }
}
