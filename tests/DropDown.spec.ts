import { test, expect } from "@playwright/test";

test("Dropdown  and assertions", async ({ page }) => {
  await page.goto("https://letcode.in/dropdowns");
  await expect(page).toHaveURL("https://letcode.in/dropdowns");
  await expect.soft(page).toHaveTitle("Dropdowns | LetCode with Koushik");
  await expect(page.getByRole("heading", { name: "Dropdown" })).toBeVisible();
  const dd = page.locator("#fruits");
  /*   await expect(dd).toBeAttached();
  await expect(dd).toBeEditable();
  await expect(dd).toBeEnabled(); */
  // DropDown using select tag
  // single dropdown
  // select by value
  /*  await dd.selectOption({ value: "2" });
  await page.waitForTimeout(2000);
  await dd.selectOption("3");
  await page.waitForTimeout(2000);

  // select by label
  await dd.selectOption({ label: "Apple" });
  await page.waitForTimeout(2000); */

  // select by index
  await dd.selectOption({ index: 5 });
  await page.waitForTimeout(2000);
  await expect(page.locator("p.text-sm").first()).toContainText(/Pine Apple/);
  await expect(dd).toHaveValue("4");
  const ddOptions = await page.locator("#fruits option").count();
  expect(ddOptions).toBe(6);
  expect(ddOptions).toBeGreaterThan(0);
  const options: string[] = [
    "Select Fruit",
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Pine Apple",
  ];

  const rxedOptions = await page.locator("#fruits option").allInnerTexts();
  console.log(rxedOptions);
  expect(rxedOptions).toEqual(options);
  const optionSelected = await page
    .locator("#fruits option:checked")
    .innerText();
  console.log(optionSelected);
  const optionsNotselected = await page
    .locator("#fruits option:not(:checked)")
    .allInnerTexts();
  console.log(optionsNotselected);

  await page
    .locator("#superheros")
    .selectOption([
      { label: "Aquaman" },
      { label: "Black Panther" },
      { label: "Doc Savage" },
      { value: "ff" },
      { index: 6 },
    ]);
  await page.waitForTimeout(2000);
});

test("Auto Sugges", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.getByRole("searchbox").pressSequentially("iphone");
  await page.locator('[role="rowgroup"] [role="row"]').first().waitFor();
  const allAutoSugges: string[] = await page
    .locator('[role="rowgroup"] [role="row"]')
    .allTextContents();

  console.log(allAutoSugges);
  for (let data of allAutoSugges) {
    if (data == "iphone 17 pro max 256+gb") {
      await page.getByLabel("iphone 17 pro max 256+gb").click();
      await page.waitForTimeout(3000);
      break;
    }
  }
});
