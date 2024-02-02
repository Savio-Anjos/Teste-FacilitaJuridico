import { makeFilterCustomersByEmailUseCase } from "@/use-cases/factories/make-filter-customers-byemail-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function filterCustomersByEmail(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const filterCustomersByEmailParamsSchema = z.object({
    email: z.string(),
  });

  try {
    const { email } = filterCustomersByEmailParamsSchema.parse(request.params);

    const filterCustomersByEmailUseCase = makeFilterCustomersByEmailUseCase();

    const { customers } = await filterCustomersByEmailUseCase.execute({
      email,
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
