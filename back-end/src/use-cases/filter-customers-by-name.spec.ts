import { CustomersRepository } from "@/repositories/customers-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCustomersRepository } from "@/repositories/in-memory/in-memory-customers-repository";
import { FilterCustomersByNameUseCase } from "./filter-customers-by-name";

let customersRepository: CustomersRepository;
let sut: FilterCustomersByNameUseCase;

describe("Filter Customers By Name Use Case", () => {
  beforeEach(() => {
    customersRepository = new InMemoryCustomersRepository();
    sut = new FilterCustomersByNameUseCase(customersRepository);
  });

  it("should be able to filter customers by name", async () => {
    await customersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      telephone: "99 99999-9999",
      companyLatitude: -13.5240772,
      companyLongitude: -40.052903,
      clientLatitude: -13.8677792,
      clientLongitude: -40.1217253,
      distance: 30,
    });

    const { customers } = await sut.execute({
      name: "John Doe",
    });

    expect(customers).toHaveLength(1);
  });
});
