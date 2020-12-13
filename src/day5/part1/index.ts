import fs from 'fs';

interface SeatID {
  row: number;
  col: number;
  id: number;
}
export const getSeatID = (seat: string): SeatID => {
  return { row: 0, col: 0, id: 0 };
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n\n');
};
