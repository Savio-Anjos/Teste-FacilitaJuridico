import { makeListAllCustomersUseCase } from "@/use-cases/factories/make-list-all-customers-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function listAllCustomers(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const listAllCustomersUseCase = makeListAllCustomersUseCase();

    const { customers } = await listAllCustomersUseCase.execute();

    return reply.status(200).send({ customers });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return reply
        .status(400)
        .send({ error: "Invalid data", details: error.errors });
    } else {
      console.error("Error:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
}
