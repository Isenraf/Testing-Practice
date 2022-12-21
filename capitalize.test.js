const capitalize = require("./capitalize");

test("capitalize first character", () => {
  expect(capitalize("silidje")).toMatch("Silidje");
});

test("single character", () => {
  expect(capitalize("b")).toMatch("B");
});

test("empty character", () => {
  expect(capitalize(" ")).toMatch(" ");
});
