import { test, expect, Locator } from "@playwright/test";

test("Webtable practice", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-table/");
  const table: Locator = page.locator("table#courses_table");
  //   To validate table is visible

  /* await expect(table).toBeVisible();

  // to count column
  const cols = await page.locator("table thead tr th").count();
  await expect(cols).toEqual(6);
  console.log(`Total column=${cols}`);

  await expect(page.locator("table thead tr th")).toHaveCount(6);
  //   To count rows
  const rows = page.locator("table tbody tr");
  await expect(rows).toHaveCount(9);
  console.log(`Total rows=${await rows.count()}`);
  //   to get the data from single cell
  const singleCellvalue = await page
    .locator("table tbody tr:nth-child(5) td:nth-child(2)")
    .textContent();
  console.log(singleCellvalue);
  // to get particular row
  const particularRow = await page
    .locator("table tbody tr:nth-child(5)")
    .allInnerTexts(); */

  //   console.log(particularRow);
  //   to get all the data

  const data = await table.getByRole("columnheader").first().innerText();
  console.log(data);
  const rowCount = await table
    .getByRole("row")
    .filter({ has: page.getByRole("cell") })
    .count();
  console.log(rowCount);
});
 