import { CustomersRepository } from "@/repositories/customers-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCustomersRepository } from "@/repositories/in-memory/in-memory-customers-repository";
import { FilterCustomersByTelephoneUseCase } from "./filter-customers-by-telephone";

let customersRepository: CustomersRepository;
let sut: FilterCustomersByTelephoneUseCase;

describe("Filter Customers By Telephone  Use Case", () => {
  beforeEach(() => {
    customersRepository = new InMemoryCustomersRepository();
    sut = new FilterCustomersByTelephoneUseCase(customersRepository);
  });

  it("should be able to filter customers by telephone", async () => {
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
      telephone: "99 99999-9999",
    });

    expect(customers).toHaveLength(1);
  });
});
