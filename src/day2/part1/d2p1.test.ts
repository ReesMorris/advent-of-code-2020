import { passwordIsValid } from '.';

test('passwordIsValid function works with example values', () => {
  const values: Record<string, boolean> = {
    '1-3 a: abcde': true,
    '1-3 b: cdefg': false,
    '2-9 c: ccccccccc': true,
  };

  Object.keys(values).forEach((value) => {
    expect(passwordIsValid(value)).toBe(values[value]);
  });
});
