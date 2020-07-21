const calculateStrings = require('./stringCalculator');

test('Calculator should return 0 when nothing given', () => {
    expect(calculateStrings()).toBe(0);
});
test('Calculator should return number when number given', () => {
    expect(calculateStrings('2')).toBe(2);
});
test('Calculator should return sum two of numbers when two numbers given', () => {
    expect(calculateStrings('2,1')).toBe(3);
});
test('Calculator should return sum of five numbers when five numbers given', () => {
    expect(calculateStrings('2,1,6,2,5')).toBe(16);
});
test('Calculator should return sum of five numbers when five numbers given and ignore text', () => {
    expect(calculateStrings('2,1,6,2,5,test')).toBe(16);
});
test('Calculator should return 0 when text given', () => {
    expect(calculateStrings('test')).toBe(0);
});