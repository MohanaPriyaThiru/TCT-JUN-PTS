import { Page, Locator, expect } from "@playwright/test";
export class ProtoCom {
  page: Page;
  addTocartBtn: Locator;
  checkout: Locator;
  checkoutselector: string;
  cat1: Locator;
  constructor(page: Page) {
    this.page = page;
    this.addTocartBtn = page.locator(
      "//a[text()='iphone X']/ancestor::div[@class='card-body']/following-sibling::div/child::button",
    );
    this.checkout = page.locator(
      "//a[normalize-space(text())='Checkout ( 1 )']",
    );
    this.checkoutselector = "//a[normalize-space(text())='Checkout ( 1 )']";
    this.cat1 = page.getByRole("link", { name: "Category 1" });
  }

  async addTheProductTocart(): Promise<void> {
    await this.addTocartBtn.click();
    await this.page.waitForSelector(`${this.checkoutselector}`);
    await this.checkout.waitFor();
    await expect(this.checkout).toContainText("Checkout ( 1 )");
  }
  async selectCat1() {
    await this.cat1.click();
  }
}
