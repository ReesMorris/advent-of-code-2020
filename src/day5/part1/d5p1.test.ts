import { getSeatID } from '.';

test('getSeatID function works with example values', () => {
  const res = getSeatID('FBFBBFFRLR');
  expect(res.row).toBe(44);
  expect(res.col).toBe(5);
  expect(res.id).toBe(357);
});
