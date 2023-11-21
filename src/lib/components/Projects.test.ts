import "@testing-library/jest-dom";
import { test, expect } from "vitest";
import { render, screen, getByRole, getByText } from "@testing-library/svelte";
import Projects from "./Projects.svelte";
import type { Project } from "$lib/types";

test("Projects.svelte: show project description from props", () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "project-1",
      description: "description-1",
      url: "https://example.com/project-1"
    },
    {
      id: "2",
      title: "project-2",
      description: "description-2",
      url: "https://example.com/project-2"
    }
  ];
  render(Projects, { projects: projects });

  const projectElements = screen.getAllByRole("article");
  expect(projectElements.length).toBe(2);

  expect(getByRole(projectElements[0], "heading")).toHaveTextContent("project-1");
  expect(getByText(projectElements[0], "description-1")).toBeInTheDocument();
  expect(getByRole<HTMLAnchorElement>(projectElements[0], "link").href).toBe(
    "https://example.com/project-1"
  );

  expect(getByRole(projectElements[1], "heading")).toHaveTextContent("project-2");
  expect(getByText(projectElements[1], "description-2")).toBeInTheDocument();
  expect(getByRole<HTMLAnchorElement>(projectElements[1], "link").href).toBe(
    "https://example.com/project-2"
  );
});
