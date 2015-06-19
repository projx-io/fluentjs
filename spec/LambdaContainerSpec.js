describe('L', function () {
    var L = null;

    beforeEach(function () {
        L = require('../L.js').L;
    });

    it('should exist', function () {
        expect(L).toBeDefined();
    });

    describe('.array', function () {
        var expected = ['a', 'b', 'c'];
        var array = null;
        var object = null;
        var args = null;

        beforeEach(function () {
            array = L.array(['a', 'b', 'c']);
            object = L.array({"A": "a", "B": "b", "C": "c"});
            args = L.array((function () {
                return arguments;
            })('a', 'b', 'c'));
        });

        it('should return an array', function () {
            expect(Array.isArray(array)).toBeTruthy();
            expect(Array.isArray(object)).toBeTruthy();
            expect(Array.isArray(args)).toBeTruthy();
        });

        it('should have the correct count', function () {
            expect(array.length).toBe(expected.length);
            expect(object.length).toBe(expected.length);
            expect(args.length).toBe(expected.length);
        });

        it('should have the correct data', function () {
            expect(JSON.stringify(array)).toBe(JSON.stringify(expected));
            expect(JSON.stringify(object)).toBe(JSON.stringify(expected));
            expect(JSON.stringify(args)).toBe(JSON.stringify(expected));
        });
    });

    describe('.array with an offset', function () {
        var expected = ['b', 'c'];
        var array = null;
        var object = null;
        var args = null;

        beforeEach(function () {
            array = L.array(['a', 'b', 'c'], 1);
            object = L.array({"A": "a", "B": "b", "C": "c"}, 1);
            args = L.array((function () {
                return arguments;
            })('a', 'b', 'c'), 1);
        });

        it('should return an array', function () {
            expect(Array.isArray(array)).toBeTruthy();
            expect(Array.isArray(object)).toBeTruthy();
            expect(Array.isArray(args)).toBeTruthy();
        });

        it('should have the correct count', function () {
            expect(array.length).toBe(expected.length);
            expect(object.length).toBe(expected.length);
            expect(args.length).toBe(expected.length);
        });

        it('should have the correct data', function () {
            expect(JSON.stringify(array)).toBe(JSON.stringify(expected));
            expect(JSON.stringify(object)).toBe(JSON.stringify(expected));
            expect(JSON.stringify(args)).toBe(JSON.stringify(expected));
        });
    });

    describe('.param', function () {
        var a, b, c;

        beforeEach(function () {
            a = L.param(0);
            b = L.param(1);
            c = L.param(2);
        });

        it('should return the correct argument', function () {
            expect(a(1, 2, 3)).toBe(1);
            expect(b(1, 2, 3)).toBe(2);
            expect(c(1, 2, 3)).toBe(3);
        });
    });

    describe('.yield', function () {
        var operation = null;
        var parameters = null;
        var callback = null;

        beforeEach(function () {
            parameters = [5, L.param(0), 11];
            operation = function (a, b, c) {
                return a + b + c;
            };
            callback = L.yield(operation, parameters);
        });

        it('should return a callback', function () {
            expect(typeof callback).toBe('function');
        });

        it('callback should return correct value', function () {
            expect(callback(7)).toBe(23);
            expect(callback(1)).toBe(17);
            expect(callback(callback(3))).toBe(35);
        });
    });

    describe('.lazy', function () {
        var operation = null;
        var parameters = null;
        var callback = null;

        beforeEach(function () {
            operation = function (a, b, c) {
                return a + b + c;
            };
            callback = L.lazy(operation, 5, L.param(0), 11);
        });

        it('should return a callback', function () {
            expect(typeof callback).toBe('function');
        });

        it('callback should return correct value', function () {
            expect(callback(7)).toBe(23);
            expect(callback(1)).toBe(17);
            expect(callback(callback(3))).toBe(35);
        });
    });
});
