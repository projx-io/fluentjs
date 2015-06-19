// λ
// Λ

/**
 *
 * @constructor
 */
var MethodContainer = function () {
};

/**
 *
 * @param callback
 * @returns {*}
 */
MethodContainer.prototype.lazy = function (callback) {
    var args = this.args(arguments, 1);

    return this.B(callback, args);
};
MethodContainer.prototype.l = MethodContainer.prototype.lazy;

/**
 *
 * @param callback
 * @param values
 * @returns {function(this:MethodContainer)}
 */
MethodContainer.prototype.yield = function (callback, values) {
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
MethodContainer.prototype.B = MethodContainer.prototype.yield;

/**
 *
 * @param values
 * @param offset
 * @returns {Array}
 */
MethodContainer.prototype.args = function (values, offset) {
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
MethodContainer.prototype.head = function () {
    return arguments[0];
};

/**
 *
 * @returns {Array}
 */
MethodContainer.prototype.tail = function () {
    return this.args(arguments, 1);
};

/**
 *
 * @param a
 * @param b
 * @returns {*}
 */
MethodContainer.prototype.add = function (a, b) {
    return a + b;
};

/**
 *
 * @returns {boolean}
 */
MethodContainer.prototype.and = function () {
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
MethodContainer.prototype.parameter = function (i) {
    return function () {
        return arguments[i];
    };
};
MethodContainer.prototype.p = MethodContainer.prototype.param = MethodContainer.prototype.parameter;

/**
 *
 * @param array
 * @param i
 * @returns {*}
 * @constructor
 */
MethodContainer.prototype.P = function (array, i) {
    return array[i || 0];
};

/**
 *
 * @param items
 * @param callback
 * @returns {*}
 */
MethodContainer.prototype.map = function (items, callback) {
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
var Lambda = function () {
};

/**
 *
 * @type {MethodContainer}
 */
Lambda.prototype = new MethodContainer();

/**
 *
 * @type {Lambda}
 */
var lambda = new Lambda();

/**
 *
 * @type {Object}
 */
var L = Object.create({}, lambda.map(MethodContainer.prototype, function (value, key) {
    return {
        get: function () {
            return function () {
                var curries = [];

                function curry(key, params) {
                    curries.push(lambda.B(lambda[key], params));
                }

                curry(key, arguments);

                var LB = function () {
                    var params = lambda.args(arguments);
                    for (var i in curries) {
                        if (!curries[i].apply(null, params)) {
                            return false;
                        }
                    }
                    return true;
                };

                Object.defineProperties(LB, lambda.map(MethodContainer.prototype, function (value, key) {
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

module.exports = {
    L: L,
    lambda: lambda,
    λ: lambda,
    l: lambda.l.bind(lambda),
    p: lambda.p.bind(lambda)
};
