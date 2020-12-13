import { getSeatID } from '.';

test('getSeatID function works with example values', () => {
  expect(getSeatID('FBFBBFFRLR')).toBe({ row: 44, col: 5, id: 357 });
});
