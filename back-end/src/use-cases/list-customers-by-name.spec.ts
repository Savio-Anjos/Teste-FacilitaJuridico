import { CustomersRepository } from "@/repositories/customers-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { CreateClientUseCase } from "./create-client";
import { InMemoryCustomersRepository } from "@/repositories/in-memory/in-memory-customers-repository";
import { ListCustomersByNameUseCase } from "./list-customers-by-name";

let customersRepository: CustomersRepository;
let sut: ListCustomersByNameUseCase;

describe("Create Client Use Case", () => {
  beforeEach(() => {
    customersRepository = new InMemoryCustomersRepository();
    sut = new ListCustomersByNameUseCase(customersRepository);
  });

  it("should be able to create a new client", async () => {
    await customersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      telephone: "99 99999-9999",
    });

    const { customers } = await sut.execute({
      name: "John Doe",
    });

    expect(customers).toHaveLength(1);
  });
});
