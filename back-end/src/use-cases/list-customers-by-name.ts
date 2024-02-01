import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";

interface ListCustomersByNameUseCaseRequest {
  name: string;
}

interface ListCustomersByNameUseCaseResponse {
  customers: Client[];
}

export class ListCustomersByNameUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  public async execute({
    name,
  }: ListCustomersByNameUseCaseRequest): Promise<ListCustomersByNameUseCaseResponse> {
    const customers = await this.customersRepository.findByName(name);

    return { customers };
  }
}
