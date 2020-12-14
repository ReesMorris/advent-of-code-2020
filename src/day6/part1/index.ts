import fs from 'fs';

export const totalUniqueAnswers = (answers: string) => {
  const answerRow = answers.replace(/\n/g, '');

  const unique: Record<string, number> = {};
  for (let i = 0; i < answerRow.length; i += 1) {
    const char = answerRow[i];
    if (char.trim() && !unique[char]) unique[char] = 1;
  }

  return Object.keys(unique).length;
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n\n');

  let sum = 0;
  inputs.forEach((input) => (sum += totalUniqueAnswers(input)));
  console.log(sum);
};
