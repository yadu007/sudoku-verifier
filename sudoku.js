//checking if all rows have distinct values
checkRow = (_sudoku) => {

  let bool = true;
  for (let row of _sudoku) {
    let rows = []
    for (let entry of row) {
      rows.push(entry);
    }
    let is_eq = arraysEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], rows)

    bool = is_eq && bool
  }


  return bool;
}

//checking if all columns have distinct values
checkColumn = (_sudoku) => {

  let bool = true;
  for (let col = 1; col <= 9; col++) {
    let colum = [];
    for (let row = 1; row <= 9; row++) {
      let col_val = _sudoku[row - 1][col - 1];
      colum.push(col_val)
    }
    let is_eq = arraysEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], colum)
    bool = is_eq && bool
  }

  return bool;

}

//checking each 3x3 matrixes
check_subs = (_sudoku) => {
  split_bd = [0, 3, 6];
  let bool = true;
  for (let i of split_bd) {
    for (let j of split_bd) {
      let intermediateResult = check_each(_sudoku, i, j);
      bool = bool && intermediateResult;
    }
  }

  return bool;
}
//checking if all values are unique in each 3x3 matrix
check_each = (_sudoku, x, y) => {

  each = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let entry = _sudoku[x + j][y + i];
      each.push(entry);
    }
  }
  return arraysEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], each)



}

//function to check if two arrays are equal
function arraysEqual(_arr1, _arr2) {

  if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length)
    return false

  var arr1 = _arr1.concat().sort();
  var arr2 = _arr2.concat().sort();

  for (var i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i])
      return false

  }

  return true




}
let valid_sud = [
  [9, 6, 1, 2, 4, 3, 5, 7, 8],
  [8, 4, 3, 7, 5, 1, 2, 6, 9],
  [5, 2, 7, 6, 8, 9, 3, 4, 1],
  [1, 9, 4, 8, 6, 2, 7, 5, 3],
  [3, 7, 5, 1, 9, 4, 8, 2, 6],
  [2, 8, 6, 3, 7, 5, 1, 9, 4],
  [4, 1, 8, 5, 2, 6, 9, 3, 7],
  [6, 3, 2, 9, 1, 7, 4, 8, 5],
  [7, 5, 9, 4, 3, 8, 6, 1, 2]
]
let invalid_sud = [
  [8, 6, 3, 2, 4, 8, 5, 7, 8],
  [8, 4, 3, 7, 5, 8, 2, 6, 9],
  [5, 2, 7, 6, 8, 9, 8, 4, 1],
  [1, 9, 4, 8, 6, 2, 7, 5, 3],
  [3, 7, 5, 1, 9, 4, 8, 2, 6],
  [2, 8, 6, 3, 7, 5, 1, 9, 4],
  [4, 1, 8, 5, 2, 6, 9, 3, 7],
  [6, 3, 2, 9, 1, 7, 4, 8, 5],
  [7, 5, 9, 4, 3, 8, 6, 1, 2]
]

console.log(checkRow(valid_sud) && checkColumn(valid_sud) && check_subs(valid_sud));
console.log(checkRow(invalid_sud) && checkColumn(invalid_sud) && check_subs(invalid_sud));
