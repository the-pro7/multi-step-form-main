import z from "zod";

export const stepOneValidationSchema = z.object({
    name: z.string().min(8, { error: "Field error" }).nonoptional(),
    email: z.email().nonoptional(),
    phone: z.string().nonoptional()
})