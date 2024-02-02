import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { prisma } from "@/lib/prisma";

describe("Filter customers by email (e2e)", () => {
  beforeAll(() => {
    app.ready();
  });

  afterAll(() => {
    app.close();
  });

  it("should be able to filter customers by email", async () => {
    await prisma.client.create({
      data: {
        name: "John Doe",
        email: "johndoe@example.com",
        telephone: "99 99999-9999",
        companyLatitude: -13.5240772,
        companyLongitude: -40.052903,
        clientLatitude: -13.8677792,
        clientLongitude: -40.1217253,
        distance: 30,
      },
    });

    const response = await request(app.server)
      .get("/customers/filter/email/jonhdoe@example.com")
      .send();

    expect(response.statusCode).toEqual(200);
  });
});
