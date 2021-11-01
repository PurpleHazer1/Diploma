var bottlejs = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {
    return {
        getDiploma: () => {
            const diplomaPo = require('./diploma/diploma.po.js')
            return new diplomaPo()
        }
    };
});

module.exports = bottlejs;
