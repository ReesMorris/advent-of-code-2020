import fs from 'fs';

export const valueBeforeLoop = (input: string) => {
  const lines = input.split('\n');

  let count = 0;
  let i = 0;
  const ran = [];
  while (true) {
    let inc = 1;
    const [action, val] = lines[i].trim().split(' ');
    const amount =
      val[0] === '+'
        ? parseInt(val.split(val[0])[1])
        : parseInt(val.split(val[0])[1]) * -1;

    if (ran[i]) break;
    ran[i] = 1;
    if (action === 'acc') count += amount;
    if (action === 'jmp') inc = amount;

    i += inc;
  }

  return count;
};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
  console.log(valueBeforeLoop(input));
};
