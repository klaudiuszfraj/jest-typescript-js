import {add, iSnULL, createUser, fetchUser} from "./index";

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
describe('test isNull function', () => {
    it('should NOT be truthy', function () {
        expect(iSnULL()).not.toBeTruthy();
    });
    it('should return falsy', function () {
        expect(iSnULL()).toBeFalsy();
    });
    it('should return null', function () {
        expect(iSnULL()).toBeNull();
    });
})
describe('test createUser function', () => {
    it('should be user object', function () {
        expect(createUser()).toEqual({
            firstName: 'Klaud',
            lastName: 'Fraj'
        });
    });
})
//async data
describe('test fetch user function', () => {
    it('should return Leanne Graham', async function () {
    expect.assertions(1);
    const data = await fetchUser();
    expect(data.name).toEqual('Leanne Graham');
    });
})

