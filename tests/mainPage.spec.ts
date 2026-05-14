import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('Проверка отображения элементов навигации хедера', async ({ page }) => {
  await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'MCP', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'CLI', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
  await expect
    .soft(page.getByRole('button', { name: 'Switch between dark and light' }))
    .toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});

test('Проверка названий элементов навигации хедера', async ({ page }) => {
  await expect
    .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
    .toHaveText('Playwright');
  await expect.soft(page.getByRole('link', { name: 'Docs' })).toHaveText('Docs');
  await expect.soft(page.getByRole('link', { name: 'MCP', exact: true })).toHaveText('MCP');
});

test('Проверка переключения лайт мода', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Switch between dark and light').click();
  await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light');
});

test('Проверка заголовка', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect
    .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
    .toBeVisible();
  await expect
    .soft(page.locator('heading', { name: 'Playwright enables reliable' }))
    .toHaveText('Playwright enables reliable web automation for testing, scripting, and AI agents');
});

test('Проверка перехода гет стартед', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveText('Get started');
});

test('Проверка кнопки гет стартед', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible;
  await expect.soft(page.getByRole('banner')).toContainText('Get started');
  await expect
    .soft(page.getByRole('link', { name: 'Get started' }))
    .toHaveAttribute('href', '/docs/intro');
});
