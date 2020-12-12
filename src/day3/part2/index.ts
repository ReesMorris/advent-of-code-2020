import fs from 'fs';

export const treesEncountered = (
  map: string[],
  traversalX: number,
  traversalY: number
) => {};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n');
};
