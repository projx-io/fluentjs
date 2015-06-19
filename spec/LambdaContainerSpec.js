describe('l', function () {
    var l = null;

    beforeEach(function () {
        l = require('../L.js').l;
    });

    it('should exist', function () {
        expect(l).toBeDefined();
    });

    describe('.array', function () {
        var expected = ['a', 'b', 'c'];
        var array = null;
        var object = null;
        var args = null;

        beforeEach(function () {
            array = l.array(['a', 'b', 'c']);
            object = l.array({"A": "a", "B": "b", "C": "c"});
            args = l.array((function () {
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
            array = l.array(['a', 'b', 'c'], 1);
            object = l.array({"A": "a", "B": "b", "C": "c"}, 1);
            args = l.array((function () {
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
            a = l.param(0);
            b = l.param(1);
            c = l.param(2);
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
            parameters = [5, l.param(0), 11];
            operation = function (a, b, c) {
                return a + b + c;
            };
            callback = l.yield(operation, parameters);
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
            callback = l.lazy(operation, 5, l.param(0), 11);
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
