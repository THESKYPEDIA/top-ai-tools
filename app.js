const puppeteer = require("puppeteer");

(async () => {
  // Launches a browser instance
  const browser = await puppeteer.launch();
  // Creates a new page in the default browser context
  const page = await browser.newPage();
  // Navigates to the page to be scraped
  const response = await page.goto("https://jntuhresults.theskypedia.com");
//   await page.screenshot({ path: "search-result.png" });
//   console.log("Screenshot taken");

  // logs the status of the request to the page
  console.log("Request status: ", response?.status(), "\n\n\n\n");

  // Closes the browser instance
  await browser.close();
})();
