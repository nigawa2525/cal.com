import { z } from "zod";

export const ZFormQueryInputSchema = z.object({
  id: z.string(),
  test1_id: z.number().optional(), // New field to query based on test1s table
});

export type TFormQueryInputSchema = z.infer<typeof ZFormQueryInputSchema>;
