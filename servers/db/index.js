const success = require('./message/success.js');
const error = require('./message/error.js');
const test = require('./test/test.js');
module.exports= {
    "/success/": success,
    "/error/": error,
    "/test/": test(),
}