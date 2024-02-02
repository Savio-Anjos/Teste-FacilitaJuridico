import { CustomersRepository } from "@/repositories/customers-repository";
import { Client } from "@prisma/client";
import { ClientAlreadyExistsError } from "./errors/client-already-exists-error";
import { Decimal, DecimalJsLike } from "@prisma/client/runtime/library";
import { getDistanceBetweenCoordinates } from "@/utils/get-distance-between-coordinates";

interface CreateClientUseCaseRequest {
  name: string;
  email: string;
  telephone: string;
  companyLatitude: string | number | Decimal | DecimalJsLike;
  companyLongitude: string | number | Decimal | DecimalJsLike;
  clientLatitude: string | number | Decimal | DecimalJsLike;
  clientLongitude: string | number | Decimal | DecimalJsLike;
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
    companyLatitude,
    companyLongitude,
    clientLatitude,
    clientLongitude,
  }: CreateClientUseCaseRequest): Promise<CreateClientUseCaseResponse> {
    const verifyClientExists = await this.customersRepository.findByEmail(
      email
    );

    if (verifyClientExists) {
      throw new ClientAlreadyExistsError();
    }

    const distance = getDistanceBetweenCoordinates(
      {
        latitude: Number(companyLatitude),
        longitude: Number(companyLongitude),
      },
      {
        latitude: Number(clientLatitude),
        longitude: Number(clientLongitude),
      }
    );

    const client = await this.customersRepository.create({
      name,
      email,
      telephone,
      companyLatitude,
      companyLongitude,
      clientLatitude,
      clientLongitude,
      distance,
    });

    console.log(distance);

    return { client };
  }
}
