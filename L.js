/**
 * container for operations.
 *
 * @constructor
 */
var OperationContainer = function () {
};

OperationContainer.prototype.array = function (items, start) {
    var array = [];
    for (var key in items) {
        array.push(items[key]);
    }
    return array.slice(start);
};

OperationContainer.prototype.resolve = function (parameters) {
    return function (value) {
        return typeof value === "function" ? value.apply(null, parameters) : value;
    };
};

OperationContainer.prototype.yield = function (callback, parameters) {
    return function () {
        return callback.apply(null, parameters.map(this.resolve(arguments)));
    }.bind(this);
};

OperationContainer.prototype.param = function (i) {
    return function () {
        return arguments[i];
    };
};

OperationContainer.prototype.lazy = function (callback) {
    return this.yield(callback, this.array(arguments, 1));
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
