import { FastifyInstance } from "fastify";
import { createClient } from "./create-client";

export async function clientRoutes(app: FastifyInstance) {
  app.post("/customers", createClient);
}
