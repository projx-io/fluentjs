describe('O', function () {
    var O = null;

    beforeEach(function () {
        O = require('../L.js').O;
    });

    it('should exist', function () {
        console.log(O);
        expect(O).toBeDefined();
    });

    describe('math', function () {
        it('.sum', function () {
            expect(O.sum(1, 2, 3)).toBe(6);
            expect(O.sum(3, 5, 7)).toBe(15);
        });

        it('.product', function () {
            expect(O.product(1, 2, 3)).toBe(6);
            expect(O.product(3, 5, 7)).toBe(105);
        });
    });

    describe('logic', function () {
        it('.and', function () {
            expect(O.and(true, true)).toBeTruthy();
            expect(O.and(true, false)).toBeFalsy();
            expect(O.and(false, true)).toBeFalsy();
            expect(O.and(false, false)).toBeFalsy();
        });

        it('.or', function () {
            expect(O.or(true, true)).toBeTruthy();
            expect(O.or(true, false)).toBeTruthy();
            expect(O.or(false, true)).toBeTruthy();
            expect(O.or(false, false)).toBeFalsy();
        });

        it('.not', function () {
            expect(O.not(true)).toBeFalsy();
            expect(O.not(false)).toBeTruthy();
        });
    });

    describe('compare', function () {
        var a = 5;
        var b = 7;
        var c = 10;

        it('.equal', function () {
            expect(O.equal(true, true, true)).toBeTruthy();
            expect(O.equal(false, false, false)).toBeTruthy();
            expect(O.equal(false, false, true)).toBeFalsy();
        });

        it('.lessThan', function () {
            expect(O.lessThan(a, b)).toBeTruthy();
            expect(O.lessThan(b, c)).toBeTruthy();
            expect(O.lessThan(a, a)).toBeFalsy();
            expect(O.lessThan(c, a)).toBeFalsy();
        });

        it('.atMost', function () {
            expect(O.atMost(a, b)).toBeTruthy();
            expect(O.atMost(b, c)).toBeTruthy();
            expect(O.atMost(a, a)).toBeTruthy();
            expect(O.atMost(c, a)).toBeFalsy();
        });

        it('.moreThan', function () {
            expect(O.moreThan(a, b)).toBeFalsy();
            expect(O.moreThan(b, c)).toBeFalsy();
            expect(O.moreThan(a, a)).toBeFalsy();
            expect(O.moreThan(c, a)).toBeTruthy();
        });

        it('.atLeast', function () {
            expect(O.atLeast(a, b)).toBeFalsy();
            expect(O.atLeast(b, c)).toBeFalsy();
            expect(O.atLeast(a, a)).toBeTruthy();
            expect(O.atLeast(c, a)).toBeTruthy();
        });
    });

    describe('type', function () {
        it('.isUndefined', function () {
            expect(O.isUndefined(undefined)).toBeTruthy();  // <==
            expect(O.isUndefined(null)).toBeFalsy();
            expect(O.isUndefined(false)).toBeFalsy();
            expect(O.isUndefined(true)).toBeFalsy();
            expect(O.isUndefined(0)).toBeFalsy();
            expect(O.isUndefined(1)).toBeFalsy();
            expect(O.isUndefined("")).toBeFalsy();
            expect(O.isUndefined("string")).toBeFalsy();
            expect(O.isUndefined([])).toBeFalsy();
            expect(O.isUndefined(["array"])).toBeFalsy();
            expect(O.isUndefined({})).toBeFalsy();
            expect(O.isUndefined({"a":"1"})).toBeFalsy();
            expect(O.isUndefined(Object.keys)).toBeFalsy();
        });

        it('.isNull', function () {
            expect(O.isNull(undefined)).toBeFalsy();
            expect(O.isNull(null)).toBeTruthy();        // <==
            expect(O.isNull(false)).toBeFalsy();
            expect(O.isNull(true)).toBeFalsy();
            expect(O.isNull(0)).toBeFalsy();
            expect(O.isNull(1)).toBeFalsy();
            expect(O.isNull("")).toBeFalsy();
            expect(O.isNull("string")).toBeFalsy();
            expect(O.isNull([])).toBeFalsy();
            expect(O.isNull(["array"])).toBeFalsy();
            expect(O.isNull({})).toBeFalsy();
            expect(O.isNull({"a":"1"})).toBeFalsy();
            expect(O.isNull(Object.keys)).toBeFalsy();
        });

        it('.isBoolean', function () {
            expect(O.isBoolean(undefined)).toBeFalsy();
            expect(O.isBoolean(null)).toBeFalsy();
            expect(O.isBoolean(false)).toBeTruthy();    // <==
            expect(O.isBoolean(true)).toBeTruthy();     // <==
            expect(O.isBoolean(0)).toBeFalsy();
            expect(O.isBoolean(1)).toBeFalsy();
            expect(O.isBoolean("")).toBeFalsy();
            expect(O.isBoolean("string")).toBeFalsy();
            expect(O.isBoolean([])).toBeFalsy();
            expect(O.isBoolean(["array"])).toBeFalsy();
            expect(O.isBoolean({})).toBeFalsy();
            expect(O.isBoolean({"a":"1"})).toBeFalsy();
            expect(O.isBoolean(Object.keys)).toBeFalsy();
        });

        it('.isNumber', function () {
            expect(O.isNumber(undefined)).toBeFalsy();
            expect(O.isNumber(null)).toBeFalsy();
            expect(O.isNumber(false)).toBeFalsy();
            expect(O.isNumber(true)).toBeFalsy();
            expect(O.isNumber(0)).toBeTruthy();         // <==
            expect(O.isNumber(1)).toBeTruthy();         // <==
            expect(O.isNumber("")).toBeFalsy();
            expect(O.isNumber("string")).toBeFalsy();
            expect(O.isNumber([])).toBeFalsy();
            expect(O.isNumber(["array"])).toBeFalsy();
            expect(O.isNumber({})).toBeFalsy();
            expect(O.isNumber({"a":"1"})).toBeFalsy();
            expect(O.isNumber(Object.keys)).toBeFalsy();
        });

        it('.isString', function () {
            expect(O.isString(undefined)).toBeFalsy();
            expect(O.isString(null)).toBeFalsy();
            expect(O.isString(false)).toBeFalsy();
            expect(O.isString(true)).toBeFalsy();
            expect(O.isString(0)).toBeFalsy();
            expect(O.isString(1)).toBeFalsy();
            expect(O.isString("")).toBeTruthy();        // <==
            expect(O.isString("string")).toBeTruthy();  // <==
            expect(O.isString([])).toBeFalsy();
            expect(O.isString(["array"])).toBeFalsy();
            expect(O.isString({})).toBeFalsy();
            expect(O.isString({"a":"1"})).toBeFalsy();
            expect(O.isString(Object.keys)).toBeFalsy();
        });

        it('.isArray', function () {
            expect(O.isArray(undefined)).toBeFalsy();
            expect(O.isArray(null)).toBeFalsy();
            expect(O.isArray(false)).toBeFalsy();
            expect(O.isArray(true)).toBeFalsy();
            expect(O.isArray(0)).toBeFalsy();
            expect(O.isArray(1)).toBeFalsy();
            expect(O.isArray("")).toBeFalsy();
            expect(O.isArray("string")).toBeFalsy();
            expect(O.isArray([])).toBeTruthy();         // <==
            expect(O.isArray(["array"])).toBeTruthy();  // <==
            expect(O.isArray({})).toBeFalsy();
            expect(O.isArray({"a":"1"})).toBeFalsy();
            expect(O.isArray(Object.keys)).toBeFalsy();
        });

        it('.isObject', function () {
            expect(O.isObject(undefined)).toBeFalsy();
            expect(O.isObject(null)).toBeFalsy();
            expect(O.isObject(false)).toBeFalsy();
            expect(O.isObject(true)).toBeFalsy();
            expect(O.isObject(0)).toBeFalsy();
            expect(O.isObject(1)).toBeFalsy();
            expect(O.isObject("")).toBeFalsy();
            expect(O.isObject("string")).toBeFalsy();
            expect(O.isObject([])).toBeFalsy();
            expect(O.isObject(["array"])).toBeFalsy();
            expect(O.isObject({})).toBeTruthy();        // <==
            expect(O.isObject({"a":"1"})).toBeTruthy(); // <==
            expect(O.isObject(Object.keys)).toBeFalsy();
        });

        it('.isFunction', function () {
            expect(O.isFunction(undefined)).toBeFalsy();
            expect(O.isFunction(null)).toBeFalsy();
            expect(O.isFunction(false)).toBeFalsy();
            expect(O.isFunction(true)).toBeFalsy();
            expect(O.isFunction(0)).toBeFalsy();
            expect(O.isFunction(1)).toBeFalsy();
            expect(O.isFunction("")).toBeFalsy();
            expect(O.isFunction("string")).toBeFalsy();
            expect(O.isFunction([])).toBeFalsy();
            expect(O.isFunction(["array"])).toBeFalsy();
            expect(O.isFunction({})).toBeFalsy();
            expect(O.isFunction({"a":"1"})).toBeFalsy();
            expect(O.isFunction(Object.keys)).toBeTruthy();// <==
        });
    });
});
