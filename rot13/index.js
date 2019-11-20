const rot13 = require("ebg13");

module.exports = async function (context, req) {
    if (req.query.text || (req.body && req.body.text)) {
        context.res = {
            body: rot13(req.query.text || req.body.text)
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a text on the query string or in the request body"
        };
    }
};