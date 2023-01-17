const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();

app.use("/public", express.static(path.join(__dirname, "static")));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/", (req, res) => {
    console.log(req.body);
    // database work here
    res.json({success : true});
});

app.listen(3000);
