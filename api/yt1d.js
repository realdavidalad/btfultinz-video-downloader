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
    ignoreDefaultArgs: ["--enable-automation"], // remove 'chrome is being controlled by automated test software' flag
  }); // set false to see actions

  const page = await browser.newPage();

  // Navigate to the target page (yt1d.com)
  await page.goto("https://yt1d.com/en307/");

  // Type a URL into a text input field
  await page.type("#txt-url", videoUrl);

  // Optionally trigger a search or action (e.g., button click)
  await page.click("#btn-submit");

  // Wait for the API call to be made
  // await page.waitForTimeout(2000); // or use `waitForResponse` if you know the endpoint

  // Wait for a specific API call to be made
  const targetResponse = await page.waitForResponse(
    (response) =>
      response.url().includes("/analyze/ajax") && response.status() === 200
  );

  //wait for  5 seconds to ensure the page is fully loaded
  await page.waitForTimeout(5000);
  // click the second button with class "btn-success"
  await page.evaluate(() => {
    const buttons = document.querySelectorAll(".btn-success");
    if (buttons.length > 1) {
      buttons[1].click();
    }
  });

  //pick the value of span tag with id ='video_title'
  const videoTitle = await page.$eval(
    "#video_title",
    (element) => element.textContent
  );

  //pick the value of the src attribute of img tag with class 'img-thumbnail'
  const videoThumbnail = await page.$eval(
    ".img-thumbnail",
    (element) => element.src
  );

  // await page.click("/analyze/ajax");
  const targetResponse2 = await page.waitForResponse(
    (response) =>
      response.url().includes("https://yt1d.com/mates/en/convert?id") &&
      response.status() === 200
  );

  // Parse the response JSON (optional)
  const data = await targetResponse2.json();
  console.log("Response Data:", data);

  const page2 = await browser.newPage();
  // Set download behavior
  const videosFolder = path.join(__dirname, "btfultinztopost");
  const videoLink = data?.downloadUrlX;
  await page2._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: videosFolder,
  });
  // Navigate to the video link
  await page2.goto("https://yt1d.com/en307/");
  // Create a download link and trigger the download
  await page2.evaluate((videoLink) => {
    const link = document.createElement("a");
    link.href = videoLink;
    link.download = "";
    link.click();
  }, videoLink);

  //wait till the browser downloads the file
  // Wait for the download to complete

  // Wait for download completion (adjust timeout as needed)
  await page2.waitForTimeout(30000); // Wait for 5 seconds

  // Close browser

  await browser.close();

  // console.log("Video Object:", data);
  const videoData = {
    // id: data?.id,
    title: videoTitle,
    thumbnail: videoThumbnail,
    downloadUrl: data?.downloadUrlX,
  };

  console.log("Video Data:", videoData);
  return videoData;
};

getVideoDataFromYt1d("https://www.youtube.com/shorts/6Y_Ybfg97zc");
