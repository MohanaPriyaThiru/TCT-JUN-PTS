import { test, expect, BrowserContext, Page } from "@playwright/test";

test("multiple Window Handling", async ({ browser, page, context }) => {
  //   const context: BrowserContext = await browser.newContext();
  //   const page: Page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.screenshot({ path: "mainpage.jpeg" });
  await page.screenshot({ path: "screenshot/mainpage.jpeg", fullPage: true });
  const [newpage, undefined] = await Promise.all([
    //   page.waitForEvent("popup"),
    context.waitForEvent("page"),
    page.getByRole("button", { name: "New Tab" }).click(),
  ]);
  await newpage.waitForLoadState();
  await expect(newpage).toHaveURL("https://www.pavantestingtools.com/");
  await newpage.locator('[name="q"]').fill("Playwright");
  await newpage.locator('[value="Search"]').click();
  await page.bringToFront();
  await page
    .getByRole("button", { name: "Popup Windows" })
    .screenshot({ path: "screenshot/popupWindow.png" });
  await page.getByRole("button", { name: "Popup Windows" }).click();
  await page.locator("#Wikipedia1_wikipedia-search-input").fill("API Testing");
  //   await page.waitForTimeout(2000);
  await newpage.bringToFront();
  //   await newpage.waitForTimeout(2000);

});
