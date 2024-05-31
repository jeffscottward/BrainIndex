// cleanExtensions.js
import fs from "fs";
import path from "path";

const audioDir =
  "/Users/jeffscottward/Library/Mobile Documents/iCloud~md~obsidian/Documents/Audio";

const cleanExtensions = async () => {
  try {
    const files = await fs.promises.readdir(audioDir);

    for (const file of files) {
      if (file.endsWith(".crdownload")) {
        const originalFilename = file.slice(0, -11);
        const crdownloadFilepath = path.join(audioDir, file);
        const originalFilepath = path.join(audioDir, originalFilename);

        await fs.promises.rename(crdownloadFilepath, originalFilepath);
        console.log(`Renamed: ${file} to ${originalFilename}`);
      }
    }
  } catch (err) {
    console.error("Error cleaning extensions:", err);
  }
};

cleanExtensions();
