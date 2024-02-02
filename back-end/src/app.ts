import fastify from "fastify";
import { env } from "./env";
import { ZodError } from "zod";
import { clientRoutes } from "./http/controllers/routes";
import fastifyCors from "@fastify/cors";

export const app = fastify();

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
});

app.register(clientRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return reply.status(500).send({ message: "Internal server error." });
});
