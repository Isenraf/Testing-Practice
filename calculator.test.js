const { add, subtract, divide, multiply } = require("./calculator");

test("add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract two numbers", () => {
  expect(subtract(4, 2)).toBe(2);
});

test("divide two numbers", () => {
  expect(divide(4, 2)).toBe(2);
});

test("multiply two numbers", () => {
  expect(multiply(3, 3)).toBe(9);
});
