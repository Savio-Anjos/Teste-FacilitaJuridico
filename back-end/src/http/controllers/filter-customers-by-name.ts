import { makeFilterCustomersByNameUseCase } from "@/use-cases/factories/make-filter-customers-by-name-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function filterCustomersByName(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const filterCustomersByNameParamsSchema = z.object({
    name: z.string(),
  });

  try {
    const { name } = filterCustomersByNameParamsSchema.parse(request.params);

    const filterCustomersByNameUseCase = makeFilterCustomersByNameUseCase();

    const { customers } = await filterCustomersByNameUseCase.execute({
      name,
    });
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
