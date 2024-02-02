import { makeFilterCustomersByTelephoneUseCase } from "@/use-cases/factories/make-filter-customers-by-telephone";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function filterCustomersByTelephone(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const filterCustomersByTelephoneParamsSchema = z.object({
    telephone: z.string(),
  });

  try {
    const { telephone } = filterCustomersByTelephoneParamsSchema.parse(
      request.params
    );

    const filterCustomersByTelephoneUseCase =
      makeFilterCustomersByTelephoneUseCase();

    const { customers } = await filterCustomersByTelephoneUseCase.execute({
      telephone,
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
