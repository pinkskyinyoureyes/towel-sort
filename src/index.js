let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15]
]

module.exports = function towelSort (matrix) {
  if (arguments[0] === undefined) {
    return []
  } else if (arguments[0].length === 0) {
    return []
  } else {
    for(let i = 0; i < matrix.length; i++){
      if (i % 2) {
        matrix[i].reverse()
      }
    }

    let newMatrix = matrix.join().split(',')
  
    for(let i = 0; i < newMatrix.length; i++){
      newMatrix[i] = Number(newMatrix[i])
    }

    return newMatrix
  }
}
