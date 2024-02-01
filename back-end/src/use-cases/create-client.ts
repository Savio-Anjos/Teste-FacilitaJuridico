import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";

interface CreateClientUseCaseRequest {
  name: string;
  email: string;
  telephone: string;
}

interface CreateClientUseCaseResponse {
  client: Client;
}

export class CreateClientUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  public async execute({
    name,
    email,
    telephone,
  }: CreateClientUseCaseRequest): Promise<CreateClientUseCaseResponse> {
    const client = await this.customersRepository.create({
      name,
      email,
      telephone,
    });

    return { client };
  }
}
