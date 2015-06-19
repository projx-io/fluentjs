var L = require('../L.js');
describe('L', function () {
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
});
