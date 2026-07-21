import { Page, Locator } from "@playwright/test";

export class DataEntryFormPage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly address: Locator;
  readonly genderRadio: (value: string) => Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    // The blog's labels aren't properly associated with inputs (for attributes mismatch),
    // so select by the input IDs present in the page markup.
    this.name = page.locator('#name');
    this.email = page.locator('#email');
    this.phone = page.locator('#phone');
    this.address = page.locator('#textarea');
    this.genderRadio = (value: string) => {
      const v = value.toLowerCase();
      if (v === 'male') return page.locator('input#male');
      if (v === 'female') return page.locator('input#female');
      return page.locator(`input[name="gender"][value="${value}"]`);
    };
    // There isn't a dedicated submit button for the main form; use any button with text 'Submit' or input[type=submit]
    // Limit to the submit button inside the post body to avoid matching other unrelated Submit buttons on the page
    this.submitBtn = page.locator('#post-body-1307673142697428135 button:has-text("Submit")');
  }

  async navigate(): Promise<void> {
    await this.page.goto(
      "https://testautomationpractice.blogspot.com/2018/09/automation-form.html",
    );
  }

  async fillBasicInfo(data: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    gender?: string;
  }): Promise<void> {
    if (data.name) await this.name.fill(data.name);
    if (data.email) await this.email.fill(data.email);
    if (data.phone) await this.phone.fill(data.phone);
    if (data.address) await this.address.fill(data.address);
    if (data.gender) await this.genderRadio(data.gender).check();
  }

  async submit(): Promise<void> {
    await this.submitBtn.click();
  }
}
