import { FastifyInstance } from "fastify";
import { createClient } from "./create-client";
import { listAllCustomers } from "./list-all-customers";
import { filterCustomersByName } from "./filter-customers-by-name";
import { filterCustomersByEmail } from "./filter-customers-by-email";

export async function clientRoutes(app: FastifyInstance) {
  app.post("/customers", createClient);
  app.get("/customers", listAllCustomers);
  app.get("/customers/filter/name/:name", filterCustomersByName);
  app.get("/customers/filter/email/:email", filterCustomersByEmail);
}
