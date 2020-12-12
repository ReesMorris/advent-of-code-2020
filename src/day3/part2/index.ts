import fs from 'fs';

export const treesEncountered = (
  map: string[],
  traversalX: number,
  traversalY: number
) => {
  const TREE = '#';

  let total = 0;
  let x = 0;
  for (let y = 0; y < map.length; y += traversalY) {
    const row = map[y];

    if (row[x] === TREE) total += 1;
    x = (x + traversalX) % row.length;
  }

  return total;
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n');

  const a = treesEncountered(inputs, 1, 1);
  const b = treesEncountered(inputs, 3, 1);
  const c = treesEncountered(inputs, 5, 1);
  const d = treesEncountered(inputs, 7, 1);
  const e = treesEncountered(inputs, 1, 2);
  console.log(a * b * c * d * e);
};
