const fs = require("fs");

// Create a file
//                name           text
fs.writeFile("example.txt", "Hello World!", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File successfully created!");
        
        //              file   transform in UTF-8
        fs.readFile("example.txt", "utf8", (err, file) => {
            if (err) {
                console.log(err);
            }
            else {
                // Show in console
                console.log(file);
            }
        });
    }
});


// Rename the file
//          file name       new name
fs.rename("example.txt", "example2.txt", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("successfully renamed this file!");
    }
});


// Append a data on the file
//                file name          data
fs.appendFile("example2.txt", "Some data being appended", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Seccessfully appended data to file.");
    }
});


// Delete the file
//         file name
fs.unlink("example2.txt", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Successfully deleted the file.");
    }
});
