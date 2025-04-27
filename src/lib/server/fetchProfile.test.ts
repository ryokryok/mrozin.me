import { expect, it, afterAll, afterEach, beforeAll } from "vitest";
import { fetchProfile } from "./fetchProfile";
import { CMS_ENDPOINT } from "$lib/constants";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

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

const restHandlers = [
  http.get(`${CMS_ENDPOINT}profile`, () => {
    return HttpResponse.json(profile);
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

it("fetches and validates the profile data correctly", async () => {
  const profile = await fetchProfile();
  expect(profile.name).toBe("Foo Bar");
  expect(profile.username).toBe("foobar");
  expect(profile.description).toBe("developer");
  expect(profile.avatar.url).toBe("https://example.com/assets/author.jpg");
  expect(profile.projects[0].title).toBe("project1");
  expect(profile.projects[0].description).toBe("example");
  expect(profile.projects[0].url).toBe("https://example.com/project1");
  expect(profile.projects[1].title).toBe("project2");
  expect(profile.projects[1].description).toBe("example");
  expect(profile.projects[1].url).toBe("https://example.com/project2");
  expect(profile.sns[0].name).toBe("example");
  expect(profile.sns[0].url).toBe("https://example.com/@username");
});
