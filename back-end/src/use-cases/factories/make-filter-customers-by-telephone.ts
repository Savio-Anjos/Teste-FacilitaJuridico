import { PrismaCustomersRepository } from "@/repositories/prisma/prisma-customers-repository";
import { FilterCustomersByTelephoneUseCase } from "../filter-customers-by-telephone";

export function makeFilterCustomersByTelephoneUseCase() {
  const customersRepository = new PrismaCustomersRepository();
  const useCase = new FilterCustomersByTelephoneUseCase(customersRepository);

  return useCase;
}
