# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDrivenTesting.spec.ts >> Data Driven Testing rahulshetty and Learning@830$3mK2
- Location: tests\dataDrivenTesting.spec.ts:9:7

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "ProtoCommerce"
Received: "LoginPage Practise | Rahul Shetty Academy"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    12 × unexpected value "LoginPage Practise | Rahul Shetty Academy"

```

```yaml
- link "Free Access to InterviewQues/ResumeAssistance/Material":
  - /url: https://rahulshettyacademy.com/documents-request
- link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire":
  - /url: https://techsmarthire.com/
- heading [level=3]:
  - img
- text: "Username:"
- textbox "Username:": rahulshetty
- text: "Password:"
- textbox "Password:": Learning@830$3mK2
- text: Admin
- radio "Admin" [checked]
- text: User
- radio "User"
- combobox:
  - option "Student" [selected]
  - option "Teacher"
  - option "Consultant"
- checkbox "I Agree to the terms and conditions" [checked]
- text: I Agree to the
- link "terms and conditions":
  - /url: "#"
- button "Sign In"
- paragraph: (username is rahulshettyacademy and Password is Learning@830$3mK2)
```

# Test source

```ts
  1  | import { expect, Page, Locator } from "@playwright/test";
  2  | export class LoginPage {
  3  |   page: Page;
  4  |   userName: Locator;
  5  |   password: Locator;
  6  |   termCheckBox: Locator;
  7  |   signInBtn: Locator;
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.userName = page.getByLabel("Username:");
  11 |     this.password = page.getByLabel("Password:");
  12 |     this.termCheckBox = page.locator("#terms");
  13 |     this.signInBtn = page.getByRole("button", { name: "Sign In" });
  14 |   }
  15 |   async navigate(url: string): Promise<void> {
  16 |     await this.page.goto(url);
  17 |     await expect(this.page).toHaveURL(
  18 |       "https://rahulshettyacademy.com/loginpagePractise/",
  19 |     );
  20 |   }
  21 |   async loginMethod(UN: string, pwd: string): Promise<void> {
  22 |     await this.userName.fill(UN);
  23 |     await this.password.fill(pwd);
  24 |     await this.termCheckBox.check();
  25 |     await this.signInBtn.click();
  26 |   }
  27 |   async verifydashBoardPage(): Promise<void> {
  28 |     await this.page.waitForLoadState();
> 29 |     await expect(this.page).toHaveTitle("ProtoCommerce");
     |                             ^ Error: expect(page).toHaveTitle(expected) failed
  30 |   }
  31 | }
  32 | 
```