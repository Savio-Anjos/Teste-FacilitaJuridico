import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";

interface FilterCustomersByTelephoneUseCaseRequest {
  telephone: string;
}

interface FilterCustomersByTelephoneUseCaseResponse {
  customers: Client[];
}

export class FilterCustomersByTelephoneUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  public async execute({
    telephone,
  }: FilterCustomersByTelephoneUseCaseRequest): Promise<FilterCustomersByTelephoneUseCaseResponse> {
    const customers = await this.customersRepository.findByTelephone(telephone);

    return { customers };
  }
}
