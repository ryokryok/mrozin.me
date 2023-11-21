import { expect, it } from "vitest";
import { formatDate } from "./utils";

it("expect date 2023-01-01", () => {
  expect(formatDate("2023-01-01T00:00:00.000+09:00")).toBe("2023-01-01");
});

it("expect date 2023-12-31", () => {
  expect(formatDate("2023-12-31T23:59:59.000+09:00")).toBe("2023-12-31");
});
