import {
  test,
  chromium,
  Browser,
  BrowserContext,
  Page,
  firefox,
  Locator,
} from "@playwright/test";
import console from "node:console";

test.only("Instagram", async ({ page }) => {
  await page.goto("https://www.instagram.com/");
  await page.waitForTimeout(3000);
  await page.locator("#_R_32d9lplcldcpbn6b5ipamH1_").fill("priya@gamil.com");
  await page.click("");
  await page.waitForTimeout(3000);
});

test("Google *@smoke*", async ({ page }) => {
  //   await page.goto("https://www.google.com/");
  //   await page.waitForTimeout(3000);
  let n = 5;
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i));
  }

  for (let i = n - 1; i >= 1; i--) {
    console.log("#".repeat(i));
  }
});

test("CSS-Locators", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // Css
  // tagName
  await page.locator("textarea").fill("Anna Nagar");
  // ID---> use #
  await page.locator("#name").fill("priya");
  //class ----> use .
  await page.locator(".form-control").nth(1).fill("priya@gmail.com");
  await page.waitForTimeout(5000);
  // Atribute name and value
  await page.fill('[placeholder="Enter Phone"]', "25689636");
  // combination
  await page.fill('input.form-control#phone[maxlength="10"]', "565888955");

  await page.check("#female");
  await page.waitForTimeout(3000);
  // await page.check("#male");
  await page.locator("#male").check();

  await page.locator("#monday").check();

  await page.waitForTimeout(3000);
  await page.locator("#monday").uncheck();
});
test("// xpath", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // Basic Xpath
  await page
    .locator('//input[@placeholder="Enter Name"]')
    .type("string", { delay: 200 });
  await page.waitForTimeout(5000);
  await page
    .locator('//input[@id="email"]')
    .pressSequentially("String", { delay: 200 });

  const femaleRadioBtn: Locator = page.locator('//input[@value="female"]');
  await femaleRadioBtn.check();

  const btnChecked: Promise<boolean> = femaleRadioBtn.isChecked();
  console.log("-------------");
  console.log(await page.locator('//input[@value="male"]').isChecked());
  console.log("-------------");
  console.log(await btnChecked);
  // await page.waitForTimeout(5000);
  console.log(await femaleRadioBtn.isDisabled());
  console.log(await femaleRadioBtn.isEditable());
  console.log(await femaleRadioBtn.isEnabled());
  console.log(await femaleRadioBtn.isHidden());
  console.log(await femaleRadioBtn.isVisible());
  await page.locator("");
  // Xpath using text
  console.log(await page.locator("//button[text()='START']").isVisible());

  // Xapth using contains()

  await page.locator('//input[contains(@value,"sat")]').check();
  await page.locator('//input[contains(@value,"sat")]').uncheck();
  await page.locator('//button[contains(text(),"Point")]').hover();
  // Xpath using index
  await page.locator('(//input[@class="form-control"])[3]').fill("36985247");
  await page.waitForTimeout(5000);
});
test(" // userfacing locator or inbuild locator", async ({ page }) => {
  // page.getByAltText--->img
  // page.getByLabel
  // page.getByPlaceholder
  // page.getByRole
  // page.getByTestId
  // page.getByText
  // page.getByTitle

  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");

  await page.getByTestId("password").fill("secret_sauce");

  await page.getByTestId("login-button").click();
  await page
    .locator(".product_sort_container")
    .selectOption({ label: "Price (low to high)" });
  await page.waitForTimeout(3000);
});

test("GET BY LABEL", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByLabel("Address:").fill("Anna Nagar");
  // await page.getByAltText('LetCode')
  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await page.getByRole("button", { name: "START" }).click();
  await page.getByRole("textbox", { name: "Address:" }).fill("Arumbakkam");
  await page.waitForTimeout(5000);
});
