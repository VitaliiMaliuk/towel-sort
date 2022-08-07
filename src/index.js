
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  if (matrix.length === 0) {
    return [];
  }
  let resultArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <matrix[i].length; j++) {
      let index = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      resultArray.push(matrix[i][index]);
    }
  }
  return resultArray;
}
