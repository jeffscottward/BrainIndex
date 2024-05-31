#### Running the Scripts
You can now run each script via npm:

1. Clean extensions: npm run clean-extensions
2. Generate .txt files: npm run generate-txt-files
3. To run Fabric on a specific file: npm run fabric --file SOMEFILE.txt or npm run fabric -f SOMEFILE.txt

Replace <filename> with the actual name of the file you want to process.

#### Note:
Ensure you have the necessary permissions and required tools (ts, fabric, pbcopy, pbpaste) installed and accessible in your environment.
Adjust the paths and commands as necessary to fit your specific environment and requirements.

This seems to work. Need to make an Obisidan tool for this.
This assumes its already in txt obviously. 

cat /Users/jeffscottward/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/Audio/Default_20240531-104020.m4a.txt | fabric -p extract_wisdom | save "test2"