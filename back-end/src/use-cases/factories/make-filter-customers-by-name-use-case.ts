import { PrismaCustomersRepository } from "@/repositories/prisma/prisma-customers-repository";
import { FilterCustomersByNameUseCase } from "../filter-customers-by-name";

export function makeFilterCustomersByNameUseCase() {
  const customersRepository = new PrismaCustomersRepository();
  const useCase = new FilterCustomersByNameUseCase(customersRepository);

  return useCase;
}
