const fs = require("fs");

// Create a folder
//          name
fs.mkdir("tutorial", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Create a file in the folder
        fs.writeFile("./tutorial/example.txt", "password", (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Successfully created file!");
            }
        });
    }
});


// Delete the folder and file
// Delete file
//                 name
fs.unlink("./tutorial/example.txt", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Delete folder
        //          name
        fs.rmdir("tutorial", (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Deleted folder");
            }
        });
    }
});


// Delete many files in folder
//            name          array with file name
fs.readdir("example", (err, files) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get each file names and delete in loop
        for (let file of files) {
            //            name     file name 
            fs.unlink("./example/" + file, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Successfully deleted file");
                }
            });
        };
    }
});
