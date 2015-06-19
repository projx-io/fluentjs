/**
 * container for operations.
 *
 * @constructor
 */
var LambdaContainer = function () {
};

LambdaContainer.prototype.array = function (items, start) {
    var array = [];
    for (var key in items) {
        array.push(items[key]);
    }
    return array.slice(start);
};

LambdaContainer.prototype.resolve = function (parameters) {
    return function (value) {
        return typeof value === "function" ? value.apply(null, parameters) : value;
    };
};

LambdaContainer.prototype.yield = function (callback, parameters) {
    return function () {
        return callback.apply(null, parameters.map(this.resolve(arguments)));
    }.bind(this);
};

LambdaContainer.prototype.param = function (i) {
    return function () {
        return arguments[i];
    };
};

LambdaContainer.prototype.lazy = function (callback) {
    return this.yield(callback, this.array(arguments, 1));
};

/**
 * container for any operations that can be used fluent like.
 *
 * @constructor
 */
var FluentContainer = function () {
};

FluentContainer.prototype = new LambdaContainer();

module.exports = new FluentContainer();
