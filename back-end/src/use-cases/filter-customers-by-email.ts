import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";

interface FilterCustomersByEmailUseCaseRequest {
  email: string;
}

interface FilterCustomersByEmailUseCaseResponse {
  customers: Client[];
}

export class FilterCustomersByEmailUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  public async execute({
    email,
  }: FilterCustomersByEmailUseCaseRequest): Promise<FilterCustomersByEmailUseCaseResponse> {
    const customers = await this.customersRepository.filterByEmail(email);

    return { customers };
  }
}
