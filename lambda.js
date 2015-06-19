// λ
// Λ

/**
 *
 * @constructor
 */
var Lambda = function () {
};

/**
 *
 * @param callback
 * @returns {*}
 */
Lambda.prototype.lazy = function (callback) {
    var args = this.args(arguments, 1);

    return this.B(callback, args);
};
Lambda.prototype.l = Lambda.prototype.lazy;

/**
 *
 * @param callback
 * @param values
 * @returns {function(this:Lambda)}
 */
Lambda.prototype.yield = function (callback, values) {
    values = this.args(values);
    return function Breduction() {
        var parameters = this.args(arguments);

        var results = values.map(function (value) {
            if (typeof value === "function") {
                return value.apply(null, parameters);
            }
            return value;
        });

        return callback.apply(values, results);
    }.bind(this);
};
Lambda.prototype.B = Lambda.prototype.yield;

/**
 *
 * @param values
 * @param offset
 * @returns {Array}
 */
Lambda.prototype.args = function (values, offset) {
    var args = [];
    for (var i = offset || 0; i < values.length; i++) {
        args.push(values[i]);
    }
    return args;
};

/**
 *
 * @returns {*}
 */
Lambda.prototype.head = function () {
    return arguments[0];
};

/**
 *
 * @returns {Array}
 */
Lambda.prototype.tail = function () {
    return this.args(arguments, 1);
};

/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
Lambda.prototype.add = function (a, b) {
    return a + b;
};

/**
 *
 * @returns {boolean}
 */
Lambda.prototype.and = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (!arguments[i]) {
            return false;
        }
    }
    return true;
};

/**
 *
 * @param i
 * @returns {Function}
 */
Lambda.prototype.parameter = function (i) {
    return function () {
        return arguments[i];
    };
};
Lambda.prototype.p = Lambda.prototype.param = Lambda.prototype.parameter;

/**
 *
 * @param array
 * @param i
 * @returns {*}
 * @constructor
 */
Lambda.prototype.P = function (array, i) {
    return array[i || 0];
};

/**
 *
 * @param items
 * @param callback
 * @returns {*}
 */
Lambda.prototype.map = function (items, callback) {
    if (Array.isArray(items)) {
        return items.map(callback);
    }

    var object = {};
    Object.keys(items).map(function (key) {
        object[key] = callback(items[key], key);
    });
    return object;
};

/**
 *
 */
var lambda = function () {
};

/**
 *
 * @type {Lambda}
 */
lambda.prototype = new Lambda();

/**
 *
 * @type {lambda}
 */
var M = new lambda();

/**
 *
 * @type {Object}
 */
var L = Object.create({}, M.map(Lambda.prototype, function (value, key) {
    return {
        get: function () {
            return function () {
                var curries = [];

                function curry(key, params) {
                    curries.push(M.B(M[key], params));
                }

                curry(key, arguments);

                var LB = function () {
                    var params = M.args(arguments);
                    for (var i in curries) {
                        if (!curries[i].apply(null, params)) {
                            return false;
                        }
                    }
                    return true;
                };

                Object.defineProperties(LB, M.map(Lambda.prototype, function (value, key) {
                    return {
                        get: function () {
                            return function () {
                                curry(key, arguments);
                                return LB;
                            }
                        }
                    };
                }));

                return LB;
            }
        }
    };
}));

/**
 *
 * @type {{L: Object, lambda: lambda, λ: lambda, l: (function(this:lambda)), p: (function(this:lambda))}}
 */
module.exports = {
    L: L,
    lambda: M,
    λ: M,
    l: M.l.bind(M),
    p: M.p.bind(M)
};
