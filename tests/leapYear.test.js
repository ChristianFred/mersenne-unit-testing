const leapYear = require('../leapYear');

test('2004 should return True', () => {
    let result = leapYear(2004);
    expect(result).toBe(true);
});
test('2003 should return False', () => {
    let result = leapYear(2003);
    expect(result).toBe(false);
});
test('2000 should return False', () => {
    let result = leapYear(2000);
    expect(result).toBe(false);
});
