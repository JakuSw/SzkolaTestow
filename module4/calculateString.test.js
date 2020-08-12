const calculateString = require('./calculateString');

test('Calculator should return 0 when nothing given', () => {
    expect(calculateString()).toBe(0);
});
test('Calculator should return number when number given', () => {
    expect(calculateString('2')).toBe(2);
});
test('Calculator should return sum of five numbers when five numbers given', () => {
    expect(calculateString('2,1,6,2,5')).toBe(16);
});
test('Calculator should return sum of five numbers when five numbers given and ignore text', () => {
    expect(calculateString('2,1,6,2,5,test')).toBe(16);
});
test('Calculator should return 0 when text given', () => {
    expect(calculateString('test')).toBe(0);
});
test(String.raw`Calculator should ignore new line and return 6 when 1\n2,3 given`, () => {
    expect(calculateString('1\n2,3')).toBe(6);
});
test(String.raw`Calculator should return error when 1,\n3 given`, () => {
    expect(calculateString('1,\n3')).toBe(String.raw`Number expected but new line found at position 1`);
});