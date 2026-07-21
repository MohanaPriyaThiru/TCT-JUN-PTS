import { test, request } from "@playwright/test";

// Using TestInfo, I can get details like:
// Test name
// Test status
// Retry count
// Browser name
// Test file name
// Timeout
// Attach screenshots, logs, API responses, and traces to reports
// We mostly use TestInfo for reporting, debugging failed tests, and capturing artifacts during execution.

test("Login Test", async ({ page }, testInfo) => {
  // TestInfo in Playwright

  // TestInfo is a built-in Playwright object that provides information about the currently executing test.
  //contains all metadata related to the current test.

  // ------------testInfo.title---------------
  console.log(testInfo.title); //Returns current test name.

  //   Useful when generating custom logs.
  console.log(`Executing Test : ${testInfo.title}`);

  // --------------testInfo.status---------------
  console.log(testInfo.status); //Returns final test result.

  // Capture screenshot only when test fails.
  if (testInfo.status === "failed") {
    await page.screenshot({
      path: "failure.png",
    });
  }

  // --------testInfo.expectedStatus-------------
  console.log(testInfo.expectedStatus); //Returns expected result.

  //   Verify whether the test failed unexpectedly.
  if (testInfo.status !== testInfo.expectedStatus) {
    console.log("Unexpected Failure");
  }

  // testInfo.retry

  console.log(testInfo.retry); //Returns retry number.

  // Perform extra logging only during retries.
  if (testInfo.retry > 0) {
    console.log("Retry Execution");
  }

  // testInfo.project.name

  console.log(testInfo.project.name); // Returns configured project name.
  // Know which browser is executing.
  console.log(`Running on ${testInfo.project.name}`); //

  // testInfo.file

  console.log(testInfo.file); //Returns current test file path.,Useful for debugging large frameworks.

  // testInfo.timeout
  console.log(testInfo.timeout); //Returns test timeout.

  // testInfo.outputDir
  console.log(testInfo.outputDir); //Returns output folder path.
  await page.screenshot({
    path: `${testInfo.outputDir}/failure.png`,
  }); //Store screenshots and logs dynamically.

  // testInfo.attach()
  const responseData = { message: "Login failed", code: 401 };
  await testInfo.attach("API Response", {
    body: JSON.stringify(responseData),
    contentType: "application/json",
  }); //Attach files or data to Playwright report.

  /* Real Project Use

Attach:

Screenshots
API Responses
Request Payloads
Logs
Trace Files

These become visible in the Playwright HTML Report. */

  // Screenshot Attachment Example
  const screenshot = await page.screenshot();

  await testInfo.attach("Failure Screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
  // API Response Attachment Example
  const api = await request.newContext();
  const response = await api.get("/users");

  const data = await response.json();

  await testInfo.attach("User API Response", {
    body: JSON.stringify(data, null, 2),
    contentType: "application/json",
  });
});

// What Interviewers Expect You To Remember
// Property	Use
// testInfo.title	Test Name
// testInfo.status	Pass/Fail Status
// testInfo.retry	Retry Count
// testInfo.project.name	Browser Name
// testInfo.file	Test File Path
// testInfo.timeout	Test Timeout
// testInfo.outputDir	Store Artifacts
// testInfo.attach()	Add Screenshot/Logs/API Response to Report
// 1-Line Interview Answer

// TestInfo is used to get runtime information about the current test and is mainly used for reporting, debugging, retry handling, browser identification, and attaching screenshots or logs to Playwright reports.
