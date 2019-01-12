'use strict';

module.exports = (input, options = {}) => {
  const type = typeof input;

  // transform to number
  try {
    input = eval(input);
  } catch (e) {
    input = NaN;
  }

  if (Number.isNaN(input)) {
    return {
      error: `Expected a number, got ${type}`
    };
  }

  return {
    binary: input.toString(2),
    decimal: parseInt(input, 2)
  };
};
