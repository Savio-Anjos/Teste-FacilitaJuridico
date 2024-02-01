import { PrismaCustomersRepository } from "@/repositories/prisma/prisma-customers-repository";
import { CreateClientUseCase } from "../create-client";
import { FilterCustomersByNameUseCase } from "../filter-customers-by-name";
import { ListAllCustomersUseCase } from "./../list-all-customers";

export function makeListAllCustomersUseCase() {
  const customersRepository = new PrismaCustomersRepository();
  const useCase = new ListAllCustomersUseCase(customersRepository);

  return useCase;
}
