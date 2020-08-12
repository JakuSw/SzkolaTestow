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
test(String.raw`Calculator should return error when 1,3, given, number expected`, () => {
    expect(calculateString('1,3,')).toBe('Number expected but EOF found');
});

test('Calculator should return 3 when //;\n1;2 given, custom separator ', () => {
    expect(calculateString('//;\n1;2')).toBe(3);
});

test('Calculator should error and print negative numbers in string', () => {
    expect(calculateString('-1,2')).toBe('Negative not allowed : -1');
});

test('Calculator should return multiple errors, negative number and separator after separator', () => {
    expect(calculateString('-1,,2')).toBe(String.raw`Negative not allowed : -1Number expected but ',' found at position 3`);
});