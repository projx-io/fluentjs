describe('L', function () {
    var L = null;
    var o = null;

    beforeEach(function () {
        L = require('../L.js').L;
        o = require('../L.js').o;
    });

    it('should exist', function () {
        expect(L).toBeDefined();
    });

    describe('should have operations available', function () {
        it('.isUndefined', function () {
            expect(L.isUndefined).toBeDefined();
        });

        it('.isNull', function () {
            expect(L.isNull).toBeDefined();
        });

        it('.isBoolean', function () {
            expect(L.isBoolean).toBeDefined();
        });

        it('.isNumber', function () {
            expect(L.isNumber).toBeDefined();
        });

        it('.isString', function () {
            expect(L.isString).toBeDefined();
        });

        it('.isArray', function () {
            expect(L.isArray).toBeDefined();
        });

        it('.isObject', function () {
            expect(L.isObject).toBeDefined();
        });

        it('.isFunction', function () {
            expect(L.isFunction).toBeDefined();
        });

        it('.equal', function () {
            expect(L.equal).toBeDefined();
        });

        it('.lessThan', function () {
            expect(L.lessThan).toBeDefined();
        });

        it('.atMost', function () {
            expect(L.atMost).toBeDefined();
        });

        it('.moreThan', function () {
            expect(L.moreThan).toBeDefined();
        });

        it('.atLeast', function () {
            expect(L.atLeast).toBeDefined();
        });

        it('.and', function () {
            expect(L.and).toBeDefined();
        });

        it('.or', function () {
            expect(L.or).toBeDefined();
        });

        it('.not', function () {
            expect(L.not).toBeDefined();
        });

        it('.sum', function () {
            expect(L.sum).toBeDefined();
        });

        it('.product', function () {
            expect(L.product).toBeDefined();
        });

    });
});




