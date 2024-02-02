import { FastifyInstance } from "fastify";
import { createClient } from "./create-client";
import { listAllCustomers } from "./list-all-customers";
import { filterCustomersByName } from "./filter-customers-by-name";

export async function clientRoutes(app: FastifyInstance) {
  app.post("/customers", createClient);
  app.get("/customers", listAllCustomers);
  app.get("/customers/filter/name/:name", filterCustomersByName);
}
