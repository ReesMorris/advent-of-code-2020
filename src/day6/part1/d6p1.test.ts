import { totalUniqueAnswers } from '.';

test('totalUniqueAnswers function works with example values', () => {
  expect(totalUniqueAnswers(`abc`)).toBe(3);

  expect(
    totalUniqueAnswers(`
    a
    b
    c`)
  ).toBe(3);

  expect(
    totalUniqueAnswers(`
    ab
    ac`)
  ).toBe(3);

  expect(
    totalUniqueAnswers(`
  a
  a
  a
  a`)
  ).toBe(1);

  expect(totalUniqueAnswers(`b`)).toBe(1);
});
