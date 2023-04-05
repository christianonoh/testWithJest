// Arrange
const stringLength = require('./stringLength.js');
// Act and Assert 

test('returns length of string', () => {
    expect(stringLength('burge')).toBe(5);
  });

  test('checks if string length is greater than 0', () => {
    expect(stringLength('n')).toBeGreaterThan(0);;
  });

  test('checks if string length is greater than 10', () => {
    expect(stringLength('burgeburge')).toBeLessThan(11);;
  });