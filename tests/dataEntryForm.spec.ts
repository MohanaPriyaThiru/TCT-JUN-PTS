import { test, expect } from "@playwright/test";
import { DataEntryFormPage } from "../page/dataEntryFormPage";

test.describe("Data Entry Form", () => {
  test("fills form fields and verifies values", async ({ page }) => {
    const form = new DataEntryFormPage(page);
    await form.navigate();

    const sample = {
      name: "Test User",
      email: "test.user@example.com",
      phone: "1234567890",
      address: "123 Playwright Lane",
      gender: "Male",
    };

    await form.fillBasicInfo(sample);

    await expect(form.name).toHaveValue(sample.name);
    await expect(form.email).toHaveValue(sample.email);
    await expect(form.phone).toHaveValue(sample.phone);

    await form.submit();

    // After submit the site may reload or show a message; at minimum ensure the page stays reachable
    await expect(page).toHaveURL(/automation-form/);
  });
});
