import fs from 'fs';

export const valueBeforeLoop = (input: string) => {};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
};
