var operations = {
    undefined: function (a) {
        return typeof a === "undefined";
    },
    null: function (a) {
        return a ===  null;
    },
    boolean: function (a) {
    },
    number: function (a) {
    },
    string: function (a) {
    },
    array: function (a) {
    },
    object: function (a) {
    },
    function: function (a) {
    },
    equal: function (a, b) {
        return a === b;
    },
    lessThan: function (a, b) {
        return a < b;
    },
    atMost: function (a, b) {
        return a < b || this.equal(a, b);
    },
    moreThan: function (a, b) {
        return a > b;
    },
    atLeast: function (a, b) {
        return a > b || this.equal(a, b);
    },
    and: function (a, b) {
        return a && b;
    },
    or: function (a, b) {
        return a || b;
    },
    not: function (a) {
        return !a;
    },
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};

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

var OperationContainer = function () {
};
OperationContainer.prototype = new LambdaContainer();

OperationContainer.prototype.sum = function () {
    return this.array(arguments).reduce(operations.add, 0);
};

OperationContainer.prototype.product = function () {
    return this.array(arguments).reduce(operations.multiply, 1);
};

OperationContainer.prototype.and = function () {
    return this.array(arguments).reduce(operations.and, true);
};

OperationContainer.prototype.or = function () {
    return this.array(arguments).reduce(operations.or, false);
};

OperationContainer.prototype.not = function (value) {
    return operations.not(value);
};

OperationContainer.prototype.equal = function (a, b) {
    return this.array(arguments).reduce(operations.equal, a);
};

OperationContainer.prototype.lessThan = function (a, b) {
    return operations.lessThan(a, b);
};

OperationContainer.prototype.moreThan = function (a, b) {
    return operations.moreThan(a, b);
};

OperationContainer.prototype.atMost = function (a, b) {
    return operations.atMost(a, b);
};

OperationContainer.prototype.atLeast = function (a, b) {
    return operations.atLeast(a, b);
};

OperationContainer.prototype.isUndefined = function (value) {
    return operations.undefined(value);
};

OperationContainer.prototype.isNull = function (value) {
    return operations.null(value);
};

OperationContainer.prototype.isBoolean = function (value) {
    return operations.boolean(value);
};

OperationContainer.prototype.isNumber = function (value) {
    return operations.number(value);
};

OperationContainer.prototype.isString = function (value) {
    return operations.string(value);
};

OperationContainer.prototype.isArray = function (value) {
    return operations.array(value);
};

OperationContainer.prototype.isObject = function (value) {
    return operations.object(value);
};

OperationContainer.prototype.isFunction = function (value) {
    return operations.function(value);
};

/**
 * container for any operations that can be used fluent like.
 *
 * @constructor
 */
var FluentContainer = function () {
};

FluentContainer.prototype = new LambdaContainer();

module.exports = {
    L: new FluentContainer(),
    O: new OperationContainer()
};
