const fs = require('fs');

interface findSumResult {
  success: boolean;
  num1: number;
  num2: number;
}
const findSum = (arr: string[], sum: number): findSumResult => {
  // Convert all strings to numbers
  let newArr = arr.map((num) => parseInt(num));

  // Remove any numbers higher than the sum
  newArr = newArr.filter((num) => num <= sum);

  // Sort by size (inc.)
  newArr = newArr.sort();

  // Loop through each number to find a pair
  for (let i = 0; i < newArr.length; i++)
    for (let j = 0; j < newArr.length; j++)
      if (newArr[i] + newArr[j] === sum)
        return { success: true, num1: newArr[i], num2: newArr[j] };

  // No results
  return { success: false, num1: 0, num2: 0 };
};

const setup = () => {
  const inputs = fs
    .readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split('\n');

  const { success, num1, num2 } = findSum(inputs, 2020);
  if (success) return console.log(num1 * num2);
  return console.log('could not find sum');
};
setup();
