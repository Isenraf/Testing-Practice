function caesarCipher(_string, shift = 1) {
  let encrypted = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  _string.split("").forEach((char) => {
    if (alphabet.includes(char)) {
      const index = alphabet.findIndex((c) => c === char);
      encrypted += alphabet[(index + shift) % 26];
    } else {
      encrypted += char;
    }
  });

  return encrypted;
}

module.exports = caesarCipher;
