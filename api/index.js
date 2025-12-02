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

const getVideoDataFromSsyoutube = async (videoUrl) => {
  // Launch browser
  const browser = await puppeteer.launch({ headless: true }); // set false to see actions
  const page = await browser.newPage();

  // Navigate to the target page (ssyoutube.com)
  await page.goto("https://ssyoutube.com/en800oX/");

  // Type a URL into a text input field
  await page.type("#id_url", videoUrl);

  // Optionally trigger a search or action (e.g., button click)
  await page.click("#search");

  // // Wait for the API call to be made
  // await page.waitForTimeout(20000); // or use `waitForResponse` if you know the endpoint

  // Wait for a specific API call to be made
  const targetResponse = await page.waitForResponse(
    (response) =>
      response.url().includes("/api/convert") && response.status() === 200
  );

  // Parse the response JSON (optional)
  const data = await targetResponse.json();

  // Close browser
  await browser.close();

  //extract needful data from the response
  //search for the video object that has audio
  const videoObject = data?.url.find(
    (item) => item.audio === false && item.no_audio === false
  );

  //create an high resolution video  (1080p or 720p)
  const highResVideoWithAudio = data?.url.find(
    (item) =>
      (item.quality === "1080p" || item.quality === "720p") &&
      item.audio === false &&
      item.no_audio === true &&
      item.name === "MP4"
  );
  const audioOnly = data?.url.find(
    (item) =>
      item.audio === true &&
      item.no_audio === false &&
      item.name === "Audio M4A"
  );
  //combine the high resolution video with audio

  // console.log("Video Object:", data);
  const videoData = {
    id: data?.id,
    title: data?.meta?.title,
    thumbnail: data?.thumb,
    downloadUrl: videoObject?.url,
  };
  // console.log("Video Data:", videoData.downloadUrl);
  return videoData;
};

// 
const getVideoDataFromYt1d = async (videoUrl, videoId) => {
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

  const targetResponse2 = await page.waitForResponse(
    (response) =>
      response.url().includes("https://yt1d.com/mates/en/convert?id") &&
      response.status() === 200
  );

  // Parse the response JSON (optional)
  const data = await targetResponse2.json();
  // console.log("Response Data:", data);

  // use puppeteer to also download the video
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
  await page2.waitForTimeout(40000); // Wait for 40 seconds

  // Close browser

  await browser.close();

  // console.log("Video Object:", data);
  const videoData = {
    id: videoId,
    title: videoTitle,
    thumbnail: videoThumbnail,
    downloadUrl: data?.downloadUrlX,
  };

  console.log("Video Data:", videoData);
  return videoData;
};


const getVideoDataFromYtDown = async (videoUrl, videoId) => {
  puppeteer.use(StealthPlugin);
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ["--enable-automation"], // remove 'chrome is being controlled by automated test software' flag
  }); // set false to see actions

  const page = await browser.newPage();

  // Navigate to the target page (ytdown.com)
  await page.goto("https://ytdown.to/en2/");

  // Type a URL into a text input field with id of the text field
  await page.type("#postUrl", videoUrl);

  // get video from youtube
  await page.click(".btn-download");
  // await page.evaluate(() => {
  // const buttons  = document.querySelectorAll(".btn-download");
  //   if (buttons.length > 1) {
  //     buttons[1].click();
  //   }
  // });
  


  // //wait for  5 seconds to ensure the page is fully loaded
  // await page.waitForTimeout(5000);
  // // click the second button which downloads the video to default browser download folder
  // // await page.click("#downloadButton");

 
// Wait for the API call to be made
  const targetResponse2 = await page.waitForResponse(
    (response) =>
      response.url().includes("https://ytdown.to/proxy.php") &&
      response.status() === 200
  );

    // console.log('I am here')
  // Parse the response JSON (optional)
  const data = await targetResponse2.json();
  // console.log("Response Data:", data);

   //pick video title and thumbnail
  const videoThumbnail = data?.api?.mediaItems[1]?.mediaThumbnail;
  const videoTitle = data?.api?.title;

  // use puppeteer to also download the video
  const page2 = await browser.newPage();
  // Set download behavior
  const videosFolder = path.join(__dirname, "btfultinztopost");
  const videoLink = data?.api?.mediaItems[1]?.mediaUrl;
  await page2._client.send("Page.setDownloadBehavior", {
    behavior: "allow",
    downloadPath: videosFolder,
  });

  //make a get api call to the video link and get fileUrl from the response
  const response = await axios.get(videoLink);
  const fileUrl = response.data?.fileUrl;
  // console.log("fileUrl from API response:", fileUrl);

  // Navigate to the video link
  await page2.goto("https://ytdown.to/en2/");
  // Create a download link and trigger the download
  await page2.evaluate((fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "";
    link.click();
  }, fileUrl);

  //wait till the browser downloads the file
  // Wait for the download to complete

  // Wait for download completion (adjust timeout as needed)
  await page2.waitForTimeout(40000); // Wait for 40 seconds

  // Close browser

  await browser.close();

  // console.log("Video Object:", data);
  const videoData = {
    id: videoId,
    title: videoTitle,
    thumbnail: videoThumbnail,
    downloadUrl: data?.videoLink,
  };

  // console.log("Video Data:", videoData);
  return videoData;
};


const downloadVideo = async (downloadUrl, fileName) => {
  const videosFolder = path.join(__dirname, "btfultinztopost");

  // Ensure the videos folder exists
  await fs.promises.mkdir(videosFolder, { recursive: true });

  const filePath = path.join(videosFolder, fileName);

  console.log(`Downloading video to: ${videosFolder}`);

  console.log(fileName);

  const downloader = new Downloader({
    id: videoId,
    url: downloadUrl,
    directory: videosFolder,
    fileName: fileName,
  });

  try {
    await downloader.download();
    return filePath;
  } catch (error) {
    console.error(`Failed to download video: ${error.message}`);
    // throw new Error(`Failed to download video: ${error.message}`);
  }
};

// const downloadVideo = async (downloadUrl, fileName) => {
//   const videosFolder = path.join(__dirname, "btfultinztopost");

//   // Ensure the videos folder exists
//   await fs.promises.mkdir(videosFolder, { recursive: true });

//   const filePath = path.join(videosFolder, fileName);

//   console.log(`Downloading video to: ${videosFolder}`);

//   console.log(fileName);

//   const downloader = new Downloader({
//     id: videoId,
//     url: downloadUrl,
//     directory: videosFolder,
//     fileName: fileName,
//   });

//   try {
//     await downloader.download();
//     return filePath;
//   } catch (error) {
//     console.error(`Failed to download video: ${error.message}`);
//     // throw new Error(`Failed to download video: ${error.message}`);
//   }
// };

const extractYtInitialData = async (htmlString) => {
  let ytInitialData = null;
  const startIndex = htmlString.indexOf("var ytInitialData =");
  if (startIndex !== -1) {
    const endIndex = htmlString.indexOf("</head>", startIndex);
    // console.log(startIndex, endIndex);
    if (endIndex !== -1) {
      let jsonString = htmlString
        .substring(startIndex + "var ytInitialData =".length, endIndex)
        .trim();
      // console.log(jsonString);
      jsonString = jsonString.split(";</script>")[0]; // Remove the trailing script tag if present
      // console.log(jsonString);

      try {
        ytInitialData = JSON.parse(jsonString);
      } catch (error) {
        console.error("Error parsing ytInitialData JSON:", error);
      }
    }
  }

  return ytInitialData;
};

const GetYouTubeChannelShortVideoIds = async (channelUrl) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(channelUrl, requestOptions);
    const htmlString = await response.text();

    const ytInitialData = await extractYtInitialData(htmlString);

    var videoIdsFromYtInitialData = [];

    // Extract video IDs from ytInitialData
    for (const item of ytInitialData?.contents?.twoColumnBrowseResultsRenderer
      ?.tabs[2]?.tabRenderer?.content?.richGridRenderer?.contents) {
      videoIdsFromYtInitialData.push(
        item?.richItemRenderer?.content?.shortsLockupViewModel?.onTap
          ?.innertubeCommand?.reelWatchEndpoint?.videoId
      );
    }

    // console.log("Video IDs from ytInitialData:", videoIdsFromYtInitialData);

    return videoIdsFromYtInitialData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};




//main function

(async () => {

  //delete the previous post videos
  const videosFolder = path.join(__dirname, "btfultinztopost");
  try {
    const files = await fs.promises.readdir(videosFolder);
    for (const file of files) {
      await fs.promises.unlink(path.join(videosFolder, file));
  }
  } catch (e) {
    // do nothing
  }


  //wait for 30 secs to sync delete operation with google drive
  // await new Promise((resolve) => setTimeout(resolve, 30000));



  // Ensure the videos folder exists
  await fs.promises.mkdir(videosFolder, { recursive: true });


  //section 0
  const youTubeChannelUsernameList = [
    //advertisement
    //induction cooker by Fabikun Retails
    // "invisacook",
    //affiliate marketing by 
    
    //Comedy
    
    // "ValuetainmentComedy",
    // "@Trend_Flare_Vibes",
    // "@WorldLuxury03",
    // "@AbsurdVideos-c5y",
    // "@botsabha",
    // "@Arbaxyz",
    // "@sai-sam",
    // "@funny12466",
    // "@DrôleFacts-1",
    // "@simple_putin",
    // "@TwinsFromRussiaRevega",
    // "@ricoanimations0",
    // "@afv",
    // "@EvaandJavier",


    "@yessjamal",
    // "@junya1gou",
    "@khabylame",
    // "@serenityover9000",
    "@lukedavidson81",
    "@aimade4u",
    "@Baby_Podcast_Diva",
    "@DiaperDiplomacy",
    "@crazysome",
    "@funnygroup.9166",
    "@jjzh5810",
    // "@thecutestbabyai"
    

  ];



    // const videoDetails = await getVideoDataFromYtDown("https://www.youtube.com/watch?v=E2k5dPno31I", "E2k5dPno31I");

  for (const username of youTubeChannelUsernameList) {
    try {
      //section A
      const channelUrl = `https://www.youtube.com/${username}/shorts`;
      console.log(`Fetching video IDs for channel: ${channelUrl}`);
      const channelShortVideoIds = await GetYouTubeChannelShortVideoIds(
        channelUrl
      );
      console.log(
        `Found ${channelShortVideoIds.length} short videos in channel: ${channelUrl}`
      );

      // //section B
      //get the  details of the most recent video in the channel (the first video in the list)
      const videoId =
        channelShortVideoIds[
          Math.floor(Math.random() * (channelShortVideoIds.length - 1))
        ]; // Pick a random video ID excluding the last element
      const videoUrl = "https://www.youtube.com/watch?v=" + videoId; // Construct the video URL


      // //download the video using ytdown.to
      const videoDetails = await getVideoDataFromYtDown(videoUrl, videoId);

      //log content title with hashtags in title-and-hashtags.txt file inside folder btfultinztopost in the same directory. create title-and-hashtags.txt file if it doesn't exist
      const titleAndHashtagsFilePath = path.join(
        __dirname,
        "btfultinztopost",
        "title-and-hashtags.txt"
      );
      const titleWithHashtags = videoDetails.title.replace(/[\r\n]+/g, ' ') + "\n";
      await fs.promises.appendFile(titleAndHashtagsFilePath, titleWithHashtags);

      
    } catch (error) {
      console.error(`Error processing channel ${username}:`, error.message);
    }
  }

})();
