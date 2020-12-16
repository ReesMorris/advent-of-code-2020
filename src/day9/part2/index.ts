import fs from 'fs';

export const missingPreambleSum = (input: string, preamble: number) => {
  const numbers = input.split('\n').map((num) => parseInt(num));

  // Loop through all numbers post-preamble to find the missing number
  let missingNum = 0;
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

    if (!found) missingNum = sumToFind;
  }

  // Find numbers that add to this
  if (!missingNum) throw new Error("Everything works, but it shouldn't");
  for (let i = 0; i < numbers.length; i += 1) {
    let j = 0;
    let total = 0;
    while (total < missingNum) {
      total += numbers[i + j];
      if (total < missingNum) j += 1;
    }

    // We found a match - pull those indices and find the smallest & largest
    if (total === missingNum) {
      const contiguous = numbers
        .filter((_, index) => index >= i && index <= i + j)
        .sort();

      return contiguous[0] + contiguous[contiguous.length - 1];
    }
  }
};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
  console.log(missingPreambleSum(input, 25));
};
