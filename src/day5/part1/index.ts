import fs from 'fs';

interface SeatID {
  row: number;
  col: number;
  id: number;
}
export const getSeatID = (seat: string): SeatID => {
  // Rows
  let lower = 0;
  let upper = 127;
  for (let i = 0; i < 7; i += 1) {
    if (seat[i] === 'F') upper = Math.floor(upper - (upper - lower) / 2);
    if (seat[i] === 'B') lower = Math.ceil(upper - (upper - lower) / 2);
  }
  const row = lower; // lower and upper should be the same value

  // Columns
  lower = 0;
  upper = 7;
  for (let i = 7; i < 10; i += 1) {
    if (seat[i] === 'L') upper = Math.floor(upper - (upper - lower) / 2);
    if (seat[i] === 'R') lower = Math.ceil(upper - (upper - lower) / 2);
  }
  const col = lower; // lower and upper should be the same value

  // ID
  const id = row * 8 + col;

  return { row, col, id };
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n');

  let highestId = 0;
  inputs.forEach((input) => {
    const res = getSeatID(input);
    if (res.id > highestId) highestId = res.id;
  });
  console.log(highestId);
};
