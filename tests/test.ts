import { expect, test } from "@playwright/test";

test("check lang", async ({ page }) => {
  await page.goto("/");
  // expected: <html lang="ja">
  await expect(page.locator("html")).toHaveAttribute("lang", "ja");
});

test("check heading tags", async ({ page }) => {
  await page.goto("/");
  // heading tags
  await expect(
    page.getByRole("heading", { name: "Mr_ozin", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Projects", level: 2 }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Articles", level: 2 }),
  ).toBeVisible();
});

test("check meta tags, and title", async ({ page }) => {
  await page.goto("/");
  // Title
  expect(await page.title()).toBe("Mr_ozin");
  // OGP
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Profile site about Mr_ozin",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Mr_ozin",
  );
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    "Profile site about Mr_ozin",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://mrozin.me/",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://mrozin.me/images/author.jpg",
  );
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "website",
  );
  // OGP for Twitter
  // note: Twitter OGP also requires the meta tag "og:url", "og:title", "og:description"
  // ref: https://developer.twitter.com/ja/docs/tweets/optimize-with-cards/guides/getting-started
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary",
  );
  await expect(page.locator('meta[name="twitter:site"]')).toHaveAttribute(
    "content",
    "@Mr_ozin",
  );
  await expect(page.locator('meta[name="twitter:creator"]')).toHaveAttribute(
    "content",
    "@Mr_ozin",
  );
});
