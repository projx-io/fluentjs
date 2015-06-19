l = require('../lambda.js').l;
L = require('../lambda.js').L;
p = require('../lambda.js').lambda.p;
P = require('../lambda.js').lambda.P;
add = require('../lambda.js').lambda.add;
and = require('../lambda.js').lambda.and;

describe('λ', function () {
    it('should return a callback', function () {
        expect(typeof l(add, 1, 2)).toBe("function");
    });

    it('should call a method and pass parameters', function () {
        expect(l(add, 1, 2)()).toBe(3);
    });

    it('should pass requested variables', function () {
        expect(l(add, p(0), p(1))(3, 4)).toBe(7);
    });

    it('should pick an item from an array', function () {
        expect(l(P, [5, 10, 15, 20, 25], 2)()).toBe(15);
        expect(l(P, [5, 10, 15, 20, 25], p(0))(3)).toBe(20);
    });

    it('should allow you to perform an and operation', function () {
        expect(l(and, true, true, true)()).toBe(true);
        expect(l(and, true, p(0), true)(true)).toBe(true);
        expect(l(and, true, p(0), true)(false)).toBe(false);
        expect(l(and, true, false, true)()).toBe(false);
    });
});
