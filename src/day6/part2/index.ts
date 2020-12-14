import fs from 'fs';

export const totalSimilarAnswers = (answers: string) => {
  const participants = (answers.match(/\n/g) || []).length + 1;
  const answerRow = answers.replace(/\n/g, '');

  const unique: Record<string, number> = {};
  for (let i = 0; i < answerRow.length; i += 1) {
    const char = answerRow[i];
    if (char.trim()) {
      if (!unique[char]) unique[char] = 1;
      else unique[char] = unique[char] + 1;
    }
  }

  return Object.keys(unique).filter((item) => unique[item] === participants)
    .length;
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n\n');

  let sum = 0;
  inputs.forEach((input) => (sum += totalSimilarAnswers(input)));
  console.log(sum);
};
