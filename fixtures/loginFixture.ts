import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import data from "../testdata/data.json";
type MyFixture = {
  loginFix: Page;
  //   page: Page;
};
export const test = base.extend<MyFixture>({
  loginFix: async ({ page }, use) => {
    const logobj = new LoginPage(page);
    await logobj.navigate(data.url);
    await logobj.loginMethod(data.UN, data.Pwd);
    await logobj.verifydashBoardPage();
    use(page);
  },
});
