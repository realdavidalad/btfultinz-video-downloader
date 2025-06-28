const fs = require("fs");
const https = require("https");
const path = require("path");
const axios = require("axios");
const { createWriteStream } = require("fs-extra");
const Downloader = require("nodejs-file-downloader");
const puppeteer = require("puppeteer-extra");

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

const getVideoDataFromYt1d = async (videoUrl) => {
  puppeteer.use(StealthPlugin);
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false,
    // ignoreDefaultArgs: ["--enable-automation"],
  }); // set false to see actions

  const page = await browser.newPage();

  // Navigate to the target page (yt1d.com)
  await page.goto("https://en1.savefrom.net/13RZ/");

  // Type a URL into a text input field
  await page.type("#sf_url", videoUrl);

  // Optionally trigger a search or action (e.g., button click)
  await page.click("#sf_submit");

  // Wait for the API call to be made
  // await page.waitForTimeout(2000); // or use `waitForResponse` if you know the endpoint

  // Wait for a specific API call to be made
  const targetResponse = await page.waitForResponse(
    (response) =>
      response.url().includes("/savefrom.php") && response.status() === 200
  );

  //wait for  5 seconds to ensure the page is fully loaded
  await page.waitForTimeout(5000);
  await page.click(".download-icon");
  const targetResponse2 = await page.waitForResponse(
    (response) =>
      response.url().includes("/convert") && response.status() === 200
  );
  //wait for  5 seconds to ensure the page is fully loaded
  await page.waitForTimeout(5000);
  await page.click(".download-icon");
  const targetResponse3 = await page.waitForResponse(
    (response) =>
      response.url().includes("/convert") && response.status() === 200
  );

  //   //find and click the first button the button with class "btn-success" and custom attribute data-ftype="mp4"
  //   await page.evaluate(() => {
  //     const button = document.querySelector(".btn-success[data-ftype='mp4']");
  //     if (button) {
  //       button.click();
  //     }
  //   });

  // await page.evaluate(() => {
  //   const button = Array.from(document.querySelectorAll(".btn-success")).find(
  //     (btn) => btn.getAttribute("data-ftype") === "mp4"  && btn.getAttribute("onclick").includes("720p")
  //   );
  //   if (button) {
  //     button.click();
  //   }
  // });

  // Parse the response JSON (optional)
  const data = await targetResponse3.json();

  // Close browser

  //   await browser.close();

  // console.log("Video Object:", data);
  const videoData = {
    id: data?.id,
    title: data?.task?.title,
    thumbnail: data?.task?.thumb,
    downloadUrl: data?.task?.downloadUrl,
  };

  console.log("Video Data:", videoData.downloadUrl);
  return videoData;
};

getVideoDataFromYt1d("https://www.youtube.com/shorts/6Y_Ybfg97zc");
