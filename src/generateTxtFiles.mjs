import fs from "fs";
import path from "path";
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);
const audioDir =
  "/Users/jeffscottward/Library/Mobile Documents/iCloud~md~obsidian/Documents/Audio";

const generateTxtFiles = async () => {
  try {
    const files = await fs.promises.readdir(audioDir);

    for (const file of files) {
      const originalFilepath = path.join(audioDir, file);
      const txtFilepath = path.join(audioDir, `${file}.txt`);

      const tsCommand = `ts "${originalFilepath}" | pbcopy`;
      await execPromise(tsCommand);

      const saveClipboardCommand = `pbpaste > "${txtFilepath}"`;
      await execPromise(saveClipboardCommand);

      console.log(`Generated: ${txtFilepath}`);
    }
  } catch (err) {
    console.error("Error generating .txt files:", err);
  }
};

generateTxtFiles();
