import { expect, Page, Locator } from "@playwright/test";
export class LoginPage {
  page: Page;
  userName: Locator;
  password: Locator;
  termCheckBox: Locator;
  signInBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.userName = page.getByLabel("Username:");
    this.password = page.getByLabel("Password:");
    this.termCheckBox = page.locator("#terms");
    this.signInBtn = page.getByRole("button", { name: "Sign In" });
  }
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    await expect(this.page).toHaveURL(
      "https://rahulshettyacademy.com/loginpagePractise/",
    );
  }
  async loginMethod(UN: string, pwd: string): Promise<void> {
    await this.userName.fill(UN);
    await this.password.fill(pwd);
    await this.termCheckBox.check();
    await this.signInBtn.click();
  }
  async verifydashBoardPage(): Promise<void> {
    await this.page.waitForLoadState();
    await expect(this.page).toHaveTitle("ProtoCommerce");
  }
}
