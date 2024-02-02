import { FastifyInstance } from "fastify";
import { createClient } from "./create-client";
import { listAllCustomers } from "./list-all-customers";

export async function clientRoutes(app: FastifyInstance) {
  app.post("/customers", createClient);
  app.get("/customers", listAllCustomers);
}
