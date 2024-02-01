import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";

interface FilterCustomersByNameUseCaseRequest {
  name: string;
}

interface FilterCustomersByNameUseCaseResponse {
  customers: Client[];
}

export class FilterCustomersByNameUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  public async execute({
    name,
  }: FilterCustomersByNameUseCaseRequest): Promise<FilterCustomersByNameUseCaseResponse> {
    const customers = await this.customersRepository.findByName(name);

    return { customers };
  }
}
