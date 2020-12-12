import { passportIsValid } from '.';

test('passportIsValid function works with example values', () => {
  const passport1 = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
  byr:1937 iyr:2017 cid:147 hgt:183cm`;
  expect(passportIsValid(passport1)).toBe(true);

  const passport2 = `iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
  hcl:#cfa07d byr:1929`;
  expect(passportIsValid(passport2)).toBe(false);

  const passport3 = `hcl:#ae17e1 iyr:2013
  eyr:2024
  ecl:brn pid:760753108 byr:1931
  hgt:179cm`;
  expect(passportIsValid(passport3)).toBe(true);

  const passport4 = `hcl:#cfa07d eyr:2025 pid:166559648
  iyr:2011 ecl:brn hgt:59in`;
  expect(passportIsValid(passport4)).toBe(false);
});
