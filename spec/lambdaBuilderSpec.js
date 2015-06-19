L = require('../lambda.js').L;

describe('λ', function () {

    it('should start to build an expression', function () {
        //L.and(6, 3, 2);
    });

    it('should allow fluent chaining', function () {
        //L.and(6, 3, 2).and(2, 3, 4);
    });

    it('should allow to call', function () {
        L.and(6, 3, 2).and(2, 3, 4)(5);
    });

    it('should reduce values', function () {
        expect(L.and(true, true).and(true, true)(true)).toBeTruthy();
        expect(L.and(false, false).and(true, true)(true)).toBeFalsy();
        expect(L.and(true, true).and(true, true)(false)).toBeTruthy();
        expect(L.and(true, true).and(false, true)(true)).toBeFalsy();
    });
});
