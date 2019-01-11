'use strict';

module.exports = (input, options = {}) => {
  const type = typeof input;

  // transform to number
  input = +input;
  if (Number.isNaN(input)) {
    throw new TypeError(`Expected a number, got ${type}`);
  }

  return {
    binary: input.toString(2),
    decimal: parseInt(input, 2)
  };
};
