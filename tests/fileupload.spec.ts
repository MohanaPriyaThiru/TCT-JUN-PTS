import { test, expect } from "@playwright/test";

test("upload", async ({ page }) => {
  await page.goto("/file");
  await page.locator("#resume").setInputFiles("testdata/git.pdf");
});

test("download @smoke", { tag: "@files" }, async ({ page }) => {
  await page.goto("/file");
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "Download Pdf" }).click(),
  ]);
  await download.saveAs("downloads/file.pdf");
  console.log(await download.suggestedFilename());
});
