/**
 * container for operations.
 *
 * @constructor
 */
var OperationContainer = function () {
};

OperationContainer.prototype.array = function (items, start) {
    var array = [];
    Object.keys(items).map(function (key) {
        array.push(items[key]);
    });
    return array.slice(start);
};

OperationContainer.prototype.lazy = function (callback) {

};

/**
 * container for any operations that can be used fluent like.
 *
 * @constructor
 */
var FluentContainer = function () {
};

FluentContainer.prototype = new OperationContainer();

module.exports = new FluentContainer();
