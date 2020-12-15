import { valueBeforeLoop } from '.';

test('valueBeforeLoop function works with example values', () => {
  expect(
    valueBeforeLoop(
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
  ).toBe(5);
});
