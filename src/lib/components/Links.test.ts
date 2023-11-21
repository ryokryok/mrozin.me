import "@testing-library/jest-dom";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Links from "./Links.svelte";
import type { Link } from "$lib/types";

test("Links.svelte: shows site links from props", () => {
  const links: Link[] = [
    {
      id: "aaa",
      name: "GitHub",
      url: "https://github.com/ryokryok"
    },
    {
      id: "bbb",
      name: "X",
      url: "https://twitter.com/Mr_ozin"
    }
  ];
  render(Links, { links: links });
  const linkElements = screen.getAllByRole<HTMLAnchorElement>("link");
  expect(linkElements.length).toBe(2);
  expect(linkElements.at(0)?.title).toBe("GitHub");
  expect(linkElements.at(0)?.href).toBe("https://github.com/ryokryok");
  expect(linkElements.at(1)?.title).toBe("X");
  expect(linkElements.at(1)?.href).toBe("https://twitter.com/Mr_ozin");
});
