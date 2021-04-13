function getSquareArea(a, b) {
  if (a === undefined) {
    return 0;
  } else {
    return a * b;
  }
}

function getTriangleArea(h, b) {
  return (h * b) / 2;
}

module.exports = {
  getSquareArea,
  getTriangleArea,
};
