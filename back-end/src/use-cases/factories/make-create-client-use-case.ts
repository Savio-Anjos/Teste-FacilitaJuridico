import { PrismaCustomersRepository } from "@/repositories/prisma/prisma-customers-repository";
import { CreateClientUseCase } from "../create-client";

export function makeCreateClientUseCase() {
  const customersRepository = new PrismaCustomersRepository();
  const useCase = new CreateClientUseCase(customersRepository);

  return useCase;
}
