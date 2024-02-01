import { CustomersRepository } from "@/repositories/customers-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCustomersRepository } from "@/repositories/in-memory/in-memory-customers-repository";
import { FilterCustomersByEmailUseCase } from "./filter-customers-by-email";

let customersRepository: CustomersRepository;
let sut: FilterCustomersByEmailUseCase;

describe("Filter Customers By Email  Use Case", () => {
  beforeEach(() => {
    customersRepository = new InMemoryCustomersRepository();
    sut = new FilterCustomersByEmailUseCase(customersRepository);
  });

  it("should be able to filter customers by email", async () => {
    await customersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      telephone: "99 99999-9999",
    });

    const { customers } = await sut.execute({
      email: "johndoe@example.com",
    });

    expect(customers).toHaveLength(1);
  });
});
