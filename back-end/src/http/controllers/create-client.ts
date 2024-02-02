import { ClientAlreadyExistsError } from "@/use-cases/errors/client-already-exists-error";
import { makeCreateClientUseCase } from "@/use-cases/factories/make-create-client-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createClient(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createClientBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    telephone: z.string().min(10),
  });

  try {
    const { name, email, telephone } = createClientBodySchema.parse(
      request.body
    );

    const createClientUseCase = makeCreateClientUseCase();

    await createClientUseCase.execute({
      name,
      email,
      telephone,
    });

    return reply.status(201).send();
  } catch (error) {
    if (error instanceof ClientAlreadyExistsError) {
      return reply.status(409).send({ message: error.message });
    } else {
      console.error("Error:", error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
}
