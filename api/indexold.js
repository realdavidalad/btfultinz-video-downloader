import express, { json } from "express";
import http from "http";
import https from "https";
import fs from "fs";
import bodyParser from "body-parser";
import qrCodeTerminal from "qrcode-terminal";
import tb from "./helpers/toolbox.js";
import config from "./config.js";
import multer from "multer";
import csv from "csvtojson";
// const ytdl = require("ytdl-core");
import ytdl from "ytdl-core";
import path from "path"; // To handle file path resolution

//instatiate express
const app = express();

//middlewares
//parse request contents to express req
app.use(bodyParser.json());
// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding"
  );
  next();
});

// Serve the "public" folder as static files
app.use(express.static("public"));

// Set up Multer to handle file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

// Replace this with the actual video URL (YouTube, Facebook, TikTok, etc.)
const videoURL = "https://www.youtube.com/shorts/PdM5hNRJmfI";

// Asynchronous function to download video using the alldl function
const downloadYouTubeVideo = async (url) => {
  try {
    console.log("Fetching video information..#.");

    // Get video metadata from ytdl-core
    ytdl("https://www.youtube.com/shorts/PdM5hNRJmfI").pipe(
      fs.createWriteStream("video.mp4")
    );

    const info = await ytdl.getInfo(url);
    console.log(JSON.stringify(info.videoDetails)); // Log video details
    const title = info.videoDetails.title.replace(/[<>:"/\\|?*]+/g, ""); // Clean title for filename
    const fileName = `${title}.mp4`;
    const filePath = path.join(__dirname, fileName);

    console.log(`Starting download: ${fileName}`);

    // Create a writable stream and pipe the video stream into it
    const videoStream = ytdl(url, { quality: "highestvideo" });

    await new Promise((resolve, reject) => {
      const file = fs.createWriteStream(filePath);

      videoStream.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log(`✅ Download completed: ${fileName}`);
        resolve();
      });

      file.on("error", (err) => {
        fs.unlink(filePath, () => {}); // Delete partial file
        console.error("❌ File write error:", err.message);
        reject(err);
      });

      videoStream.on("error", (err) => {
        console.error("❌ Stream error:", err.message);
        reject(err);
      });
    });
  } catch (error) {
    console.error("❌ Failed to download video:", error.message);
  }
};

//create and run TLS and unsecured servers
// HTTP server
const httpServer = http.createServer(app);
const httpPort = 3000;

httpServer.listen(httpPort, async () => {
  console.log(`HTTP server is running on port ${httpPort}`);
  // Initiate video download immediately
  await downloadYouTubeVideo(videoURL);
});

// // HTTPS server
// const privateKey = fs.readFileSync(`./tls/dev/private-key.pem`, "utf8");
// const certificate = fs.readFileSync("./tls/dev/certificate.pem", "utf8");
// const credentials = { key: privateKey, cert: certificate };

// const httpsServer = https.createServer(credentials, app);
// const httpsPort = 443;

// httpsServer.listen(httpsPort, async () => {
//   console.log(`HTTPS server is running on port ${httpsPort}`);
//   // Initiate video download immediately
//   await downloadVideo(videoURL);
// });
