const fs = require("fs");
const readStream = fs.createReadStream("example.txt");
const writeStream = fs.createWriteStream("example2.txt");

// Get text in the file
readStream.on("data", (chunk) => {
    // Write the text in new file
    writeStream.write(chunk);
});
