import fs from 'fs';

export const preambleContainsSum = (input: string, preamble: number) => {};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
};
