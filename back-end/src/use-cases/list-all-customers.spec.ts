import { CustomersRepository } from "@/repositories/customers-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryCustomersRepository } from "@/repositories/in-memory/in-memory-customers-repository";
import { ListAllCustomersUseCase } from "./list-all-customers";

let customersRepository: CustomersRepository;
let sut: ListAllCustomersUseCase;

describe("List All Customers Use Case", () => {
  beforeEach(() => {
    customersRepository = new InMemoryCustomersRepository();
    sut = new ListAllCustomersUseCase(customersRepository);
  });

  it("should be able to list all customers", async () => {
    await customersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      telephone: "99 99999-9999",
    });

    const { customers } = await sut.execute();

    expect(customers).toHaveLength(1);
  });
});
