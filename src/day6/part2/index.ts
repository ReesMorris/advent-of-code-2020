import fs from 'fs';

export const totalSimilarAnswers = (answers: string) => {};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n\n');
};
