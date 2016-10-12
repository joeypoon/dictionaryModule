var dictionary = require('./dictionary.json');

module.exports = {
    define: function(word) {
        return dictionary[word];
    }
};