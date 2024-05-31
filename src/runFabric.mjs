import path from "path";
import { exec } from "child_process";
import util from "util";
import minimist from "minimist";

const execPromise = util.promisify(exec);

const audioDir =
  "/Users/jeffscottward/Library/Mobile Documents/iCloud~md~obsidian/Documents/Audio";

const runFabric = async (filename) => {
  try {
    const filePath = path.resolve(audioDir, filename);

    // Copy the file content to the clipboard using cat and pbcopy
    await execPromise(`cat "${filePath}" | pbcopy`);

    await execPromise(`echo pbpaste`);

    const mdfilename = filename.split(".").slice(0, -2).join(".");

    // Run the fabric command with the clipboard content
    // const fabricCommand = `pbpaste | fabric -p extract_wisdom | save "${mdfilename}"`;
    // const { stdout, stderr } = await execPromise(fabricCommand);

    // console.log(`Fabric command stdout: ${stdout}`);
    // console.error(`Fabric command stderr: ${stderr}`);
  } catch (err) {
    console.error("Error running Fabric command:", err);
  }
};

// Parse command line arguments
const args = minimist(process.argv.slice(2));
const filename = args.file || args.f;

if (!filename) {
  console.error("Please provide a filename using --file or -f.");
  process.exit(1);
}

runFabric(filename);
