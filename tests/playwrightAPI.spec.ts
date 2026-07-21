import { expect, test } from "@playwright/test";

test("API TESTING", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking",
  );

  const statusCode = await response.status();
  console.log(statusCode);
  expect(statusCode).toBe(200);

  const body = await response.json();
  console.log(body);
});

test("Post Method", async ({ request }) => {
  const postReponse = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: { "Content-Type": "application/json" },
      data: {
        firstname: "Mohanapriya",
        lastname: "Thiruvengadam",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-01-02",
          checkout: "2026-01-03",
        },
        additionalneeds: "Breakfast",
      },
    },
  );

  console.log(postReponse.status());
  console.log(postReponse.statusText());
  const payload = await postReponse.json();
  console.log(payload);
  expect(payload).toHaveProperty("bookingid");
  expect(payload).toHaveProperty("booking");
  expect(payload.booking).toHaveProperty("firstname");
  console.log(payload.bookingid);
});

// API TESTING INTERVIEW QUESTION
// 1.diiff btw put and patch
// 2. diff bet 401 and 403
// 3. all importanat status code
// 4. http methods with real time example
// 5.idempotency
// 6.refresh token vs access token
// 7.Authentication types used in api
// self intro
//  roles and responsibility
// strcture for playwright API Automation for any 2 methods