import { z } from "zod";

const MicroCMSCommonSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
});

export const ProfileResponseSchema = z
  .object({
    name: z.string(),
    username: z.string(),
    description: z.string(),
    avatar: z.object({
      url: z.string(),
      height: z.number(),
      width: z.number(),
    }),
  })
  .and(MicroCMSCommonSchema);
