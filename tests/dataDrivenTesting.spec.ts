import { test, expect } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import data from "../testdata/data.json";
import dd from "../testdata/DDT.json";
import { reader } from "../utility/ExcelReader";
const exceldd = reader();

for (let d of exceldd) {
  test(`Data Driven Testing ${d.UserName} and ${d.Password}`, async ({
    page,
  }) => {
    const logObj = new LoginPage(page);
    await logObj.navigate(data.url);
    await logObj.loginMethod(d.UserName, d.Password);
    // await logObj.verifydashBoardPage();

    if (d.Result == "Pass") {
      await logObj.verifydashBoardPage();
    } else {
      await expect(page).toHaveTitle(
        "LoginPage Practise | Rahul Shetty Academy",
      );
    }
  });
}
