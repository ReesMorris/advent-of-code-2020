import { passportIsValid } from '.';

test('passportIsValid function works with example values', () => {
  const passport1 = `eyr:1972 cid:100
  hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`;
  expect(passportIsValid(passport1)).toBe(false);

  const passport2 = `iyr:2019
  hcl:#602927 eyr:1967 hgt:170cm
  ecl:grn pid:012533040 byr:1946`;
  expect(passportIsValid(passport2)).toBe(false);

  const passport3 = `hcl:dab227 iyr:2012
  ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277`;
  expect(passportIsValid(passport3)).toBe(false);

  const passport4 = `hgt:59cm ecl:zzz
  eyr:2038 hcl:74454a iyr:2023
  pid:3556412378 byr:2007`;
  expect(passportIsValid(passport4)).toBe(false);

  const passport5 = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
  hcl:#623a2f`;
  expect(passportIsValid(passport5)).toBe(true);

  const passport6 = `eyr:2029 ecl:blu cid:129 byr:1989
  iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm`;
  expect(passportIsValid(passport6)).toBe(true);

  const passport7 = `hcl:#888785
  hgt:164cm byr:2001 iyr:2015 cid:88
  pid:545766238 ecl:hzl
  eyr:2022`;
  expect(passportIsValid(passport7)).toBe(true);

  const passport8 = `iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;
  expect(passportIsValid(passport8)).toBe(true);
});
