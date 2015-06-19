// λ
// Λ

Λ = function () {
};

λ = function () {
};

λ.prototype = new Λ();

Λ.prototype.l = function (callback) {
    var args = this.args(arguments, 1);

    return this.B(callback, args);
};

Λ.prototype.B = function (callback, values) {
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

Λ.prototype.args = function (values, offset) {
    var args = [];
    for (var i = offset || 0; i < values.length; i++) {
        args.push(values[i]);
    }
    return args;
};

Λ.prototype.tail = function () {
    return this.args(arguments, 1);
};

Λ.prototype.add = function (a, b) {
    return a + b;
};

Λ.prototype.and = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (!arguments[i]) {
            return false;
        }
    }
    return true;
};

Λ.prototype.s = function (array, i) {
    return array[i];
};

Λ.prototype.p = function (i) {
    return function () {
        return arguments[i];
    };
};

Λ.prototype.P = function (array, i) {
    return array[i || 0];
};

Λ.prototype.map = function (items, callback) {
    if (Array.isArray(items)) {
        return items.map(callback);
    }

    var object = {};
    Object.keys(items).map(function (key) {
        object[key] = callback(items[key], key);
    });
    return object;
};

var M = new λ();

var L = Object.create({}, M.map(Λ.prototype, function (value, key) {
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

                Object.defineProperties(LB, M.map(Λ.prototype, function (value, key) {
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
    lambda: M,
    λ: M,
    l: M.l.bind(M),
    p: M.p.bind(M)
};
