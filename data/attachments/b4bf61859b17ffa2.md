# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileupload.spec.ts >> upload
- Location: tests\fileupload.spec.ts:3:5

# Error details

```
Error: locator.setInputFiles: Target page, context or browser has been closed
Call log:
  - waiting for locator('#resume')

```

# Test source

```ts
  1 | import { test, expect } from "@playwright/test";
  2 | 
  3 | test("upload", async ({ page }) => {
  4 |   await page.goto("/");
> 5 |   await page.locator("#resume").setInputFiles("testdata/git.pdf");
    |   ^ Error: locator.setInputFiles: Target page, context or browser has been closed
  6 | });
  7 | 
```