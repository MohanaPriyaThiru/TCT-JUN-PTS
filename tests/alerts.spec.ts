import { test, expect } from "@playwright/test";
test("Alerts", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //   await page.pause();
  await page.waitForTimeout(3000);
  page.on("dialog", async (alert) => {
    console.log(alert.type());
    console.log(alert.message());
    await page.waitForTimeout(3000);
    await alert.accept("priya");
  });
  await page.getByRole("button", { name: "Prompt Alert" }).click();
  //   await page.waitForTimeout(3000);
  await expect(page.locator("#demo")).toHaveText(/priya/);
});

test("userfacing locator", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  await page.getByAltText("logo image").scrollIntoViewIfNeeded();
  //   await page.waitForTimeout(3000);
  const logo: boolean = await page.getByAltText("logo image").isVisible();
  console.log(logo);
  expect(logo).toBeTruthy();
  expect(logo).not.toBeFalsy();
  await page.getByLabel("Email Address:").scrollIntoViewIfNeeded();
  await page.getByLabel("Email Address:").fill("priya@gmail.com");
  await page.getByLabel("Password:").fill("priya@123");
  await page.getByLabel("Your Age:").fill("30");
  await page.getByPlaceholder("Enter your full name").fill("priya");
  await expect(page.getByPlaceholder("Enter your full name")).toHaveValue(
    "priya",
  );
  const text: string = await page
    .getByTitle("HyperText Markup Language")
    .innerText();
  console.log(text);
  await page.getByTitle("Click to save your changes").click();
  await page.getByTestId("edit-profile-btn");
  await page.getByText("Submit Form").click();
  await page.getByRole("textbox", { name: "Username:" }).fill("rtyuihjghjgjh");
  await page.getByRole("button", { name: "START" }).click();
  console.log(await page.getByRole("heading", { name: "2. " }).innerText());
  await page.getByRole("checkbox", { name: "Accept terms" }).check();
  await page.getByRole("radio", { name: "Standard" }).check();
  await page.getByRole("link", { name: "Home" });

  await page.waitForTimeout(3000);
});
