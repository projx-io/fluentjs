describe('L', function () {
    var L = null;

    beforeEach(function () {
        L = require('../L.js').L;
    });

    it('should exist', function () {
        console.log(L);
        expect(L).toBeDefined();
    });
});
