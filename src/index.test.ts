import {add} from "./index";

describe('test add function', () => {
    it('should NOT return falsy', function () {
        expect(add(2,4)).not.toBeNull();
    });
    it('should return 6', function () {
        expect(add(2,4)).toBe(6);
    });
    it('should NOT return 5', function () {
        expect(add(2,4)).not.toBe(5);
    });
})