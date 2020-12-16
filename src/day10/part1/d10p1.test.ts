import { largestChainMultiplication } from '.';

test('largestChainMultiplication function works with example values', () => {
  expect(
    largestChainMultiplication(
      `16
      10
      15
      5
      1
      11
      7
      19
      6
      12
      4`
    )
  ).toBe(35);
});

test('largestChainMultiplication function works with example values', () => {
  expect(
    largestChainMultiplication(
      `28
      33
      18
      42
      31
      14
      46
      20
      48
      47
      24
      23
      49
      45
      19
      38
      39
      11
      1
      32
      25
      35
      8
      17
      7
      9
      4
      2
      34
      10
      3`
    )
  ).toBe(220);
});
