// import { test } from "@playwright/test";
import { LoginPage } from "../page/loginPage";
import { ProtoCom } from "../page/protoCom";
import data from "../testdata/data.json";
import { test } from "../fixtures/loginFixture";
let loginObj: any;
test("POM", async ({ loginFix }) => {
  // loginObj = new LoginPage(page);
  const protoObj = new ProtoCom(loginFix);
  // await loginObj.navigate(data.url);
  // await loginObj.loginMethod(data.UN, data.Pwd);
  // await loginObj.verifydashBoardPage();
  await protoObj.addTheProductTocart();
});

test("verify Cat1", async ({ loginFix }) => {
  // loginObj = new LoginPage(page);
  const protoObj = new ProtoCom(loginFix);
  // await loginObj.navigate(data.url);
  // await loginObj.loginMethod(data.UN, data.Pwd);
  await protoObj.selectCat1();
});
// Data Driven Testing
