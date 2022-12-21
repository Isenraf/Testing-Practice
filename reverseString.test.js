const reverseString = require("./reverseString");

test("reverse string", () => {
  expect(reverseString("florencia")).toMatch("aicnerolf");
});

test("reverse string with capitalize characters", () => {
  expect(reverseString("bricE")).toMatch("Ecirb");
});
