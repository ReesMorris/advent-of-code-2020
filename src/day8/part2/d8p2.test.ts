import { valueWithFixedLoop } from '.';

test('valueWithFixedLoop function works with example values', () => {
  expect(
    valueWithFixedLoop(
      `nop +0
      acc +1
      jmp +4
      acc +3
      jmp -3
      acc -99
      acc +1
      jmp -4
      acc +6`
    )
  ).toBe(8);
});
