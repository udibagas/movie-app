import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("textbox", { name: "Search" }).click();
  await page.getByRole("textbox", { name: "Search" }).fill("lord");
  await page.getByRole("button", { name: "SEARCH" }).click();
  await page.waitForSelector("text=Loading...");
  await page.waitForSelector(
    "text=The Lord of the Rings: The Fellowship of the Ring"
  );
  await expect(
    page.getByText("The Lord of the Rings: The Fellowship of the Ring")
  ).toBeVisible();
});
