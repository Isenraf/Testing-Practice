function analyzeArray(_array) {
  if (_array.length < 1) {
    return {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    };
  }

  return {
    average: _array.reduce((prev, curr) => prev + curr, 0) / _array.length,
    min: Math.min(..._array),
    max: Math.max(..._array),
    length: _array.length,
  };
}

module.exports = analyzeArray;
