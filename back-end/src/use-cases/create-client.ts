import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";
import { ClientAlreadyExistsError } from "./errors/client-already-exists-error";

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
    const verifyClientExists = await this.customersRepository.findByEmail(
      email
    );

    if (verifyClientExists) {
      throw new ClientAlreadyExistsError();
    }

    const client = await this.customersRepository.create({
      name,
      email,
      telephone,
    });

    return { client };
  }
}
