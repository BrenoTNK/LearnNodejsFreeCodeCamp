const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();     // Create a zip
const gunzip = zlib.createGunzip(); // Unzip

// Create Zip
// const readStream = fs.createReadStream("./example.txt", "utf8");
// const writeStream = fs.createWriteStream("example2.txt.gz");
readStream.pipe(gzip).pipe(writeStream);

// Unzip
// const readStream = fs.createReadStream("example2.txt.gz");
// const writeStream = fs.createWriteStream("uncompressed.txt");
readStream.pipe(gunzip).pipe(writeStream);


