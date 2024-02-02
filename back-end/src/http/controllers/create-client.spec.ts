import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";

describe("Create client (e2e)", () => {
  beforeAll(() => {
    app.ready();
  });

  afterAll(() => {
    app.close();
  });

  it("should be able to create client", async () => {
    const response = await request(app.server).post("/customers").send({
      name: "John Doe",
      email: "jonhdoe@example.com",
      telephone: "99 999999999",
    });

    expect(response.statusCode).toEqual(201);
  });
});
