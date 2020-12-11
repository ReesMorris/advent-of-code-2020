import fs from 'fs';

const passwordIsValid = (password: string) => {
  const sections = password.split(' ');
  if (sections.length === 3) {
    // Transform all of the data
    const lengths = sections[0].split('-');
    const minLength = parseInt(lengths[0]);
    const maxLength = parseInt(lengths[1]);
    const letterToFind = sections[1][0];
    const password = sections[2];

    // Loop through each character letter by letter
    // Likely will be more efficient since we will stop looking if we
    // exceed our `maxLength` number of matches
    let matches = 0;
    for (let i = 0; i < password.length; i += 1) {
      if (password[i] === letterToFind) matches += 1;
      if (matches > maxLength) return;
    }

    return matches >= minLength && matches <= maxLength;
  }
};

const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/input.txt`)
    .toString()
    .split('\n');

  const validPasswords = inputs.filter((input) => passwordIsValid(input));
  console.log(validPasswords.length);
};
