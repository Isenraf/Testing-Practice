const caesarCipher = require("./caesarCipher");

test("encrypt string", () => {
  expect(caesarCipher("defend", 1)).toMatch("efgfoe");
});

test("encrypt string with z", () => {
  expect(caesarCipher("defendz", 1)).toMatch("efgfoea");
});

test("encrypt string with punctuation", () => {
  expect(caesarCipher("de.fenda", 1)).toMatch("ef.gfoeb");
});

test("encrypt string with punctuation and z character", () => {
  expect(caesarCipher("de.fenda+z", 1)).toMatch("ef.gfoeb+a");
});

test("encrypt string with shift set to 5", () => {
  expect(caesarCipher("de.fenda+z", 5)).toMatch("ij.kjsif+e");
});
