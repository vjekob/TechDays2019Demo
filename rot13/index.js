const rot13 = require("ebg13");

module.exports = async function (context, req) {
    if (req.query.input || (req.body && req.body.input)) {
        context.res = {
            body: rot13(req.query.input || req.body.input)
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a text on the query string or in the request body"
        };
    }
};