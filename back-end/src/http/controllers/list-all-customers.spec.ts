import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { prisma } from "@/lib/prisma";

describe("List all customers (e2e)", () => {
  beforeAll(() => {
    app.ready();
  });

  afterAll(() => {
    app.close();
  });

  it("should be able to list all customers", async () => {
    const response = await request(app.server).get("/customers").send();

    await prisma.client.create({
      data: {
        name: "John Doe",
        email: "jonhdoe@example.com",
        telephone: "99 999999999",
      },
    });

    expect(response.statusCode).toEqual(200);
  });
});
