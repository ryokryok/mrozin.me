import { z } from "zod";

const MicroCMSCommonSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
});

const MicroCMSCommonListItemSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
});

export const ProjectSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
  })
  .and(MicroCMSCommonListItemSchema);

export const SNSSchema = z
  .object({
    name: z.string(),
    url: z.string(),
  })
  .and(MicroCMSCommonListItemSchema);

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
    projects: z.array(ProjectSchema),
    sns: z.array(SNSSchema),
  })
  .and(MicroCMSCommonSchema);

export type SNSListType = z.infer<typeof SNSSchema>;
export type ProjectListType = z.infer<typeof ProjectSchema>;
