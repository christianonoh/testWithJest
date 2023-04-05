// Arrange 
const Calculator = require("./calculator");

// Act and Assert 
describe(Calculator, () => {
	test('this returns the sum of numbers', () => {
		expect(Calculator.add(2,2,2,2,2)).toBe(10);
	});
	test('this returns the difference of numbers', () => {
		expect(Calculator.subtract(10,2,2)).toBe(6);
	});
	test('this returns the product of numbers', () => {
		expect(Calculator.multiply(3,2,1,1)).toBe(6);
	});
	test('this returns the quotient of numbers', () => {
		expect(Calculator.divide(4,2)).toBe(2);
	});
});
