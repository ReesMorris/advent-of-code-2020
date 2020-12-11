import fs from 'fs';

export const passwordIsValid = (password: string) => {
  const sections = password.split(' ');
  if (sections.length === 3) {
    // Transform all of the data
    const positions = sections[0].split('-');
    const letterToFind = sections[1][0];
    const password = sections[2];

    // Ensure password matches at exactly one index
    let matches = 0;
    for (let i = 0; i < positions.length; i += 1) {
      if (password[parseInt(positions[i]) - 1] === letterToFind)
        if (++matches > 1) return false;
    }

    // Success if there was only one match
    return matches === 1;
  }
};

export const setup = () => {
  const inputs: string[] = fs
    .readFileSync(`${__dirname}/../input.txt`)
    .toString()
    .split('\n');

  // inputs = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];

  const validPasswords = inputs.filter((input) => passwordIsValid(input));
  console.log(validPasswords.length);
};
