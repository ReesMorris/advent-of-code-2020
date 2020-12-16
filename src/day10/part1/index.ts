import fs from 'fs';

export const largestChainMultiplication = (input: string) => {
  // Sort the items
  const sorted = input
    .split('\n')
    .map((num) => parseInt(num))
    .sort((a, b) => a - b);

  // Get the total chain where the max diff is 3
  let chain = [0]; // starts from zero jolts
  let i = 0;
  while (i < sorted.length) {
    if (i === 0 || sorted[i - 1] + 3 >= sorted[i]) {
      chain.push(sorted[i]);
      i += 1;
    } else break;
  }

  // Find the total 1-jolt and 3-jolt differences
  let oneJoltDiffs = 0;
  let threeJoltDiffs = 1; // +1 for the final 3-jolt diff
  for (let i = 0; i < chain.length; i += 1) {
    if (chain[i] + 1 === chain[i + 1]) oneJoltDiffs += 1;
    if (chain[i] + 3 === chain[i + 1]) threeJoltDiffs += 1;
  }

  // Return the multiplied value
  return oneJoltDiffs * threeJoltDiffs;
};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
  console.log(largestChainMultiplication(input));
};
