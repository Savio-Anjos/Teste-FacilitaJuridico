import { CustomersRepository } from "@/repositories/customers-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { CreateClientUseCase } from "./create-client";
import { InMemoryCustomersRepository } from "@/repositories/in-memory/in-memory-customers-repository";

let customersRepository: CustomersRepository;
let sut: CreateClientUseCase;

describe("Create Client Use Case", () => {
  beforeEach(() => {
    customersRepository = new InMemoryCustomersRepository();
    sut = new CreateClientUseCase(customersRepository);
  });

  it("should be able to create a new client", async () => {
    const { client } = await sut.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      telephone: "99 99999-9999",
      companyLatitude: -13.5240772,
      companyLongitude: -40.052903,
      clientLatitude: -13.8677792,
      clientLongitude: -40.1217253,
    });

    expect(client.name).toBe("John Doe");
  });
});
