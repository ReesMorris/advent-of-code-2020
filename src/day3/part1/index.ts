import fs from 'fs';

export const treesEncountered = (map: string[]) => {};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n');

  // const validPasswords = inputs.filter((input) => passwordIsValid(input));
  // console.log(validPasswords.length);
};
