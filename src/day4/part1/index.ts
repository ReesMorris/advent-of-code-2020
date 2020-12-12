import fs from 'fs';

export const passportIsValid = (passport: string) => {
  const REQUIRED_FIELDS = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
    // 'cid',
  ];
  const fields = passport.replace(/\n/g, ' ').split(' ');
  const passportData: Record<string, string> = {};

  // Add the fields to the passport
  fields.forEach((field) => {
    const [key, value] = field.split(':');
    if (key && value) passportData[key] = value;
  });

  // Validate
  for (let i = 0; i < REQUIRED_FIELDS.length; i += 1)
    if (!passportData[REQUIRED_FIELDS[i]]) return false;

  return true;
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n\n');

  const valid = inputs.filter((input) => passportIsValid(input));
  console.log(valid.length);
};
