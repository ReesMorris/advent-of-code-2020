import fs from 'fs';

export const missingPreambleSum = (input: string, preamble: number) => {
  const numbers = input.split('\n').map((num) => parseInt(num));

  // Loop through all numbers post-preamble
  for (let i = preamble; i < numbers.length; i += 1) {
    const sumToFind = numbers[i];

    let found = false;
    for (let j = Math.max(0, i - preamble); j < i; j += 1) {
      for (let k = Math.max(0, i - preamble); k < i; k += 1) {
        const num1 = numbers[j];
        const num2 = numbers[k];

        if (!found && num1 !== num2 && num1 + num2 === sumToFind) found = true;
      }
    }

    if (!found) return sumToFind;
  }
};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
  console.log(missingPreambleSum(input, 25));
};
