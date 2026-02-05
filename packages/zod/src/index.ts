import { z } from "zod";

export const generateSchema = z.object({
  id: z.string(),
  figmaUrl: z.url(),
  frameWork: z.string(),
  code: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type IGenerate = z.infer<typeof generateSchema>;
