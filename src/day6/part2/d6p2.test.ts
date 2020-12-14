import { totalSimilarAnswers } from '.';

test('totalSimilarAnswers function works with example values', () => {
  expect(totalSimilarAnswers(`abc`)).toBe(3);

  expect(
    totalSimilarAnswers(`a
    b
    c`)
  ).toBe(0);

  expect(
    totalSimilarAnswers(`ab
    ac`)
  ).toBe(1);

  expect(
    totalSimilarAnswers(`a
  a
  a
  a`)
  ).toBe(1);

  expect(totalSimilarAnswers(`b`)).toBe(1);
});
