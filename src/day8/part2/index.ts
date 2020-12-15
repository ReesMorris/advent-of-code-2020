import fs from 'fs';

export const valueWithFixedLoop = (input: string) => {
  const lines = input.split('\n');

  let count = 0;
  let i = 0;
  let ran = [];
  const testedJmps = [];
  let currentJmpToSkip = -1;
  while (true) {
    if (ran[i]) {
      count = 0;
      i = 0;
      ran = [];
      currentJmpToSkip = -1;
    }
    let inc = 1;
    const [action, val] = lines[i].trim().split(' ');
    const amount =
      val[0] === '+'
        ? parseInt(val.split(val[0])[1])
        : parseInt(val.split(val[0])[1]) * -1;

    ran[i] = 1;
    if (action === 'acc') count += amount;
    if (action === 'jmp') {
      if (currentJmpToSkip === -1 && !testedJmps[i]) {
        testedJmps[i] = 1;
        currentJmpToSkip = i;
      }
      if (currentJmpToSkip !== i) inc = amount;
    }

    if (i + inc === lines.length) break;
    i += inc;
  }

  return count;
};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
  console.log(valueWithFixedLoop(input));
};
