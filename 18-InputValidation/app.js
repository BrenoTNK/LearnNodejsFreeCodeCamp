const express = require("express");
const path = require("path");
// npm install joi
const Joi = require("joi");
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
    const schema = Joi.object().keys({
        /*
            string() -> Need to be a string
            trim() -> No whitespace after and before
            email() -> Email value
            required() -> Can't be undefined
            min() -> Minimum number string characters
            max() -> Maximum number string characters
        */
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });

    /* Old version */
    // Joi.validate(req.body, schema, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         res.send("An error has occurred!");
    //     }
    //     else {
    //         console.log(result);
    //         res.send("Successfully posted data!");
    //     }
    // });

    /* New version */
    const validate = schema.validate(req.body);
    res.send(validate);
});

app.listen(3000);
