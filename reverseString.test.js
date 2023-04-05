// Arrange
const reverseString = require('./reverseString.js');

// Act and Assert 
test('should return the string reversed', () => {
    expect(reverseString('ada')).toBe('ada');
});
