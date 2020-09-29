function checkNumsInOrder(numbers) {
  let start = 0;
  let end = 2;
  let res = [];

  while (end < numbers[0].length) {
    slidingWindowCheck(start, end);

    start++;
    end++;
  }

  function slidingWindowCheck(start, end) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = start; j <= end; j++) {
        let numToCompare = nums.shift();
        if (numbers[i][j] !== numToCompare) {
          res.push(false);
          return;
        }
      }
    }

    res.push(true);
  }

  return res;
}

const input = [
  [1, 2, 3, 1, 2, 3],
  [4, 5, 6, 4, 5, 6],
  [7, 8, 9, 7, 8, 9],
];

console.log(checkNumsInOrder(input));
