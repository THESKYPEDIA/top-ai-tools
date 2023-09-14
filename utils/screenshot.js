// utils/screenshot.js

import puppeteer from "puppeteer";

export async function getScreenshot(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  const screenshotBuffer = await page.screenshot();

  await browser.close();

  return screenshotBuffer;
}
