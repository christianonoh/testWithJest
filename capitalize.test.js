// Arrange
const capitalize = require("./capitalize");

// Act and assert
test("This should return the string capitalized", () => {
  expect(capitalize('burger')).toBe('BURGER');
});
