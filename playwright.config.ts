import { defineConfig, devices } from "@playwright/test";

const config = defineConfig({
  webServer: {
    command: "pnpm build && pnpm preview",
    port: 4173,
  },
  testDir: "e2e",
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});

export default config;
