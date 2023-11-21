import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Links from "./Links.svelte";
import type { SNSList } from "$lib/types";

test("Links.svelte: shows site links from props", () => {
  const links: SNSList = [
    {
      id: "aaa",
      name: "GitHub",
      url: "https://github.com/ryokryok",
      createdAt: "2023-01-01T00:00:00.000Z",
      updatedAt: "2023-01-01T00:00:00.000Z",
      publishedAt: "2023-01-01T00:00:00.000Z",
      revisedAt: "2023-01-01T00:00:00.000Z",
    },
    {
      id: "bbb",
      name: "X",
      url: "https://twitter.com/Mr_ozin",
      createdAt: "2023-01-01T00:00:00.000Z",
      updatedAt: "2023-01-01T00:00:00.000Z",
      publishedAt: "2023-01-01T00:00:00.000Z",
      revisedAt: "2023-01-01T00:00:00.000Z",
    },
  ];
  render(Links, { links: links });
  const linkElements = screen.getAllByRole<HTMLAnchorElement>("link");
  expect(linkElements.length).toBe(2);
  expect(linkElements.at(0)?.title).toBe("GitHub");
  expect(linkElements.at(0)?.href).toBe("https://github.com/ryokryok");
  expect(linkElements.at(1)?.title).toBe("X");
  expect(linkElements.at(1)?.href).toBe("https://twitter.com/Mr_ozin");
});
