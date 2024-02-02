import { PrismaCustomersRepository } from "@/repositories/prisma/prisma-customers-repository";
import { FilterCustomersByEmailUseCase } from "../filter-customers-by-email";

export function makeFilterCustomersByEmailUseCase() {
  const customersRepository = new PrismaCustomersRepository();
  const useCase = new FilterCustomersByEmailUseCase(customersRepository);

  return useCase;
}
