import fs from 'fs';

export interface FieldTypes {
  min?: number;
  max?: number;
  length?: number;
  pattern?: RegExp;
}
interface RequiredFields<T> {
  [index: string]: T;
}
export const passportIsValid = (passport: string) => {
  const REQUIRED_FIELDS: RequiredFields<FieldTypes> = {
    byr: { min: 1920, max: 2002, length: 4 },
    iyr: { min: 2010, max: 2020, length: 4 },
    eyr: { min: 2020, max: 2030, length: 4 },
    hgt: { pattern: /^([0-9]{2}in|[0-9]{3}cm)$/ },
    hcl: { pattern: /^#[0-9|a-f]{6}$/ },
    ecl: { pattern: /^(amb|blu|brn|gry|grn|hzl|oth)$/ },
    pid: { length: 9 },
  };

  const fields = passport.replace(/\n/g, ' ').split(' ');
  const passportData: Record<string, string> = {};

  // Add the fields to the passport
  fields.forEach((field) => {
    const [key, value] = field.split(':');
    if (key && value) passportData[key] = value;
  });

  // Validate
  let valid = true;
  Object.keys(REQUIRED_FIELDS).forEach((field) => {
    const { min, max, length, pattern } = REQUIRED_FIELDS[field];
    const fieldData = passportData[field];
    if (!fieldData) return (valid = false);
    if (min && parseInt(fieldData) < min) return (valid = false);
    if (max && parseInt(fieldData) > max) return (valid = false);
    if (length && fieldData.length !== length) return (valid = false);
    if (pattern && !fieldData.match(pattern)) return (valid = false);
    if (field === 'hgt') {
      if (fieldData.indexOf('cm') !== -1) {
        const val = parseInt(fieldData.split('cm')[0]);
        if (val < 150 || val > 193) return (valid = false);
      }
      if (fieldData.indexOf('in') !== -1) {
        const val = parseInt(fieldData.split('in')[0]);
        if (val < 59 || val > 76) return (valid = false);
      }
    }
  });

  return valid;
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n\n');

  const valid = inputs.filter((input) => passportIsValid(input));
  console.log(valid.length);
};
