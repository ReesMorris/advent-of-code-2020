import fs from 'fs';

export const treesEncountered = (map: string[]) => {
  const TREE = '#';

  let total = 0;
  let x = 0;
  for (let y = 0; y < map.length; y++) {
    const row = map[y];

    if (row[x] === TREE) total += 1;
    x = (x + 3) % row.length;
  }

  return total;
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n');

  console.log(treesEncountered(inputs));
};
