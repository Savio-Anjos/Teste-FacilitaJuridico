import { PrismaCustomersRepository } from "@/repositories/prisma/prisma-customers-repository";
import { ListAllCustomersUseCase } from "./../list-all-customers";

export function makeListAllCustomersUseCase() {
  const customersRepository = new PrismaCustomersRepository();
  const useCase = new ListAllCustomersUseCase(customersRepository);

  return useCase;
}
