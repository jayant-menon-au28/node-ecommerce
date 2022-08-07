// always returns path of root directory

const path = require('path');

module.exports = path.dirname(require.main.filename);
