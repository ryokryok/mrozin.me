import { it, expect } from "vitest";
import { ProfileResponseSchema } from "./schema";

const profile = {
  createdAt: "2023-07-30T02:43:06.624Z",
  updatedAt: "2025-04-27T06:36:26.417Z",
  publishedAt: "2023-07-30T02:43:06.624Z",
  revisedAt: "2025-04-27T06:36:26.417Z",
  name: "Foo Bar",
  username: "foobar",
  description: "developer",
  avatar: {
    url: "https://example.com/assets/author.jpg",
    height: 460,
    width: 460,
  },
  projects: [
    {
      id: "ayfy8z3uu7e4",
      createdAt: "2024-09-09T18:43:22.230Z",
      updatedAt: "2024-09-09T18:43:22.230Z",
      publishedAt: "2024-09-09T18:43:22.230Z",
      revisedAt: "2024-09-09T18:43:22.230Z",
      title: "project1",
      description: "example",
      url: "https://example.com/project1",
    },
    {
      id: "4_l-6ugbh",
      createdAt: "2023-07-31T00:21:11.646Z",
      updatedAt: "2023-12-21T12:31:41.150Z",
      publishedAt: "2023-07-31T00:21:11.646Z",
      revisedAt: "2023-12-21T12:31:41.150Z",
      title: "project2",
      description: "example",
      url: "https://example.com/project2",
    },
  ],
  sns: [
    {
      id: "rrpy86e8s8",
      createdAt: "2023-07-31T00:00:36.530Z",
      updatedAt: "2023-07-31T00:00:36.530Z",
      publishedAt: "2023-07-31T00:00:36.530Z",
      revisedAt: "2023-07-31T00:00:36.530Z",
      name: "example",
      url: "https://example.com/@username",
    },
  ],
};

it("should validate the profile response schema", () => {
  const parsed = ProfileResponseSchema.parse(profile);
  expect(parsed).toEqual(profile);
});
