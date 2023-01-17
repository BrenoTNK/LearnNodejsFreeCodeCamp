const Joi = require("joi");

const arrayString = ["banana", "bacon", "cheese"];
const arrayObjets = [
    {example : "example1"},
    {example : "example2"}
];

const userInput = {
    personalInfo: {
        streetAddress: "123987987",
        city: "some town",
        state: "th"
    },
    preferences: arrayString
    // preferences: arrayObjets
};

const personalInfoSchema = Joi.object().keys({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
});

// arrayString
const preferencesSchema = Joi.array().items(Joi.string());

// arrayObjets
// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example: Joi.string().required()
// }));

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

const validate = schema.validate(userInput);
console.log(validate);
