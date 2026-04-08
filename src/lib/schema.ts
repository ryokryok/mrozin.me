import * as v from "valibot";

const MicroCMSCommonSchema = v.object({
  createdAt: v.string(),
  updatedAt: v.string(),
  publishedAt: v.string(),
  revisedAt: v.string(),
});

const MicroCMSCommonListItemSchema = v.object({
  id: v.string(),
  createdAt: v.string(),
  updatedAt: v.string(),
  publishedAt: v.string(),
  revisedAt: v.string(),
});

export const ProjectSchema = v.intersect([
  v.object({
    title: v.string(),
    description: v.string(),
    url: v.string(),
  }),
  MicroCMSCommonListItemSchema,
]);

export const SNSSchema = v.intersect([
  v.object({
    name: v.string(),
    url: v.string(),
  }),
  MicroCMSCommonListItemSchema,
]);

export const ProfileResponseSchema = v.intersect([
  v.object({
    name: v.string(),
    username: v.string(),
    description: v.string(),
    avatar: v.object({
      url: v.string(),
      height: v.number(),
      width: v.number(),
    }),
    projects: v.array(ProjectSchema),
    sns: v.array(SNSSchema),
  }),
  MicroCMSCommonSchema,
]);

export type SNSListType = v.InferOutput<typeof SNSSchema>;
export type ProjectListType = v.InferOutput<typeof ProjectSchema>;
