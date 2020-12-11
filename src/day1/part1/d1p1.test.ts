import randomNum from '../../utils/random-num';
import { findSum } from '.';

test('fundSum function works with example numbers', () => {
  const res = findSum(['1721', '979', '366', '299', '675', '1456'], 2020);
  const answers = [1721, 299];
  expect(res.success).toBe(true);
  expect(answers.indexOf(res.num1) !== -1).toBe(true);
  expect(answers.indexOf(res.num2) !== -1).toBe(true);
});

test('fundSum function works with arbritrary numbers', () => {
  const total = randomNum(100, 1000);
  const num1 = randomNum(50, total);
  const num2 = total - num1;

  const res = findSum(
    [
      randomNum().toString(),
      randomNum().toString(),
      randomNum().toString(),
      num1.toString(),
      randomNum().toString(),
      randomNum().toString(),
      num2.toString(),
    ],
    total
  );

  const answers = [num1, num2];
  expect(res.success).toBe(true);
  expect(answers.indexOf(res.num1) !== -1).toBe(true);
  expect(answers.indexOf(res.num2) !== -1).toBe(true);
});
