import randomNum from '../../utils/random-num';
import { findSum } from '.';

test('fundSum function works with example numbers', () => {
  const res = findSum(['1721', '979', '366', '299', '675', '1456'], 2020);
  const answers = [979, 366, 675];
  expect(res.success).toBe(true);
  expect(answers.indexOf(res.num1) !== -1).toBe(true);
  expect(answers.indexOf(res.num2) !== -1).toBe(true);
  expect(answers.indexOf(res.num3) !== -1).toBe(true);
});

test('fundSum function works with arbritrary numbers', () => {
  const total = randomNum(5000, 10000);
  const num1 = randomNum(1000, 5000);
  const num2 = randomNum(1000, 5000);
  const num3 = total - num1 - num2;

  const res = findSum(
    [
      randomNum().toString(),
      randomNum().toString(),
      randomNum().toString(),
      num1.toString(),
      randomNum().toString(),
      randomNum().toString(),
      num2.toString(),
      randomNum().toString(),
      randomNum().toString(),
      num3.toString(),
    ],
    total
  );

  const answers = [num1, num2, num3];
  expect(res.success).toBe(true);
  expect(answers.indexOf(res.num1) !== -1).toBe(true);
  expect(answers.indexOf(res.num2) !== -1).toBe(true);
  expect(answers.indexOf(res.num3) !== -1).toBe(true);
});
