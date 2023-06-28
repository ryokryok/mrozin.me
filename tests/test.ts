import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Mr_ozin' })).toBeVisible();
});

test('project page has expected h1', async ({ page }) => {
	await page.goto('/project');
	await expect(page.getByRole('heading', { name: 'Project' })).toBeVisible();
});
