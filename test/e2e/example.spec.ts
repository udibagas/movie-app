import { test, expect } from "@playwright/test";

test.describe("Movie App", () => {
  test("has title", async ({ page }) => {
    await page.goto("http://localhost:5173/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Movie App");
  });

  test("search feature", async ({ page }) => {
    await page.goto("http://localhost:5173/");

    // Type into the input.
    await page.fill("input", "iron");
    await page.click("text=SEARCH");
    expect(page.locator("text=Loading...")).toBeVisible();

    await page.waitForSelector("#movieList:has-text('Iron')");
    await expect(page.locator("#movieList")).toHaveText(/Iron/i);
  });
});
