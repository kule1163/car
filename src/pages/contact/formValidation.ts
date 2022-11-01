import * as z from "zod";

export const contactSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  country: z.string(),
  message: z.string(),
});

export type ContactInput = z.infer<typeof contactSchema>;
