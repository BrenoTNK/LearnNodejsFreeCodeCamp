const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
app.use(/*"/example",*/ (req, res, next) => {
    console.log(req.url, req.method);
    req.banana = "banana";
    next();
});

app.get("/", (req, res) => {
    console.log(req.banana);
    res.send("Middleware");
});


app.listen(3000);
