import fs from 'fs';

export const totalBagCount = (input: string, bagName: string) => {};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
};
