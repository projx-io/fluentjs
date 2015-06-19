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

    describe('compare', function () {
        it('.isUndefined', function () {
            expect(O.isUndefined(undefined)).toBeTruthy();
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
            expect(O.isNull(null)).toBeTruthy();
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
    });
});
