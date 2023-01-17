const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Nodejs!");
});

app.get("/example", (req, res) => {
    res.send("Hitting example route");
});

app.get("/example/:name/:age", (req, res) => {
    console.log(req.params);
    console.log(req.query); // ?name=value
    const { name, age } = req.params;   // Desconstrution object
    res.send(`${name} : ${age}`);
});

app.listen(3000);
