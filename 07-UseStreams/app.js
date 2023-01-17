const fs = require("fs");
// largefile == 2GB

// fs.readFile("./largefile.txt", (err, file) => {
//     // Not working!!!
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(file);
//     }
// });


// With Streams, it's possible to read large files
const readStream = fs.createReadStream("largefile.txt");
readStream.on("data", (chunk) => {
    console.log(chunk);
});
