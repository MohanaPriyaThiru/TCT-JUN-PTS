import { test, expect, Frame } from "@playwright/test";

test("ShadowDOM", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page
    .getByPlaceholder("enter name", { exact: true })
    .scrollIntoViewIfNeeded();
  await page.getByPlaceholder("enter name", { exact: true }).fill("basha"); // getBy pla
  await page.locator("#pizza").fill("cheese"); //css id
  await page.locator("#training").fill("playwright"); //css id
  await page.waitForTimeout(3000);
});

test("Frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
//   using FrameLocator
    await page
      .frameLocator("#firstFr")
      .getByPlaceholder("Enter name")
      .fill("priya");
    await page.frameLocator("#firstFr").locator('[name="lname"]').fill("mohana");
    await page
      .frameLocator("#firstFr")
      .frameLocator('[title="Inner Frame"]')
      .locator('[name="email"]')
      .fill("priya@gmail");
    await page.waitForTimeout(3000);
// using page.frames()-->index
  const framesInPage: Frame[] = await page.frames();
  console.log(framesInPage.length);
  await framesInPage.forEach((f, i) => {
    console.log(`${i} :  ${f.url()} `);
  });

  await framesInPage[1].getByPlaceholder("Enter name").fill("priya");
  await framesInPage[1].locator('[name="lname"]').fill("mohana");
  await framesInPage[4].locator('[name="email"]').fill("priya@gmail");
  await page.waitForTimeout(3000);
});
