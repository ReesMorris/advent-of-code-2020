import fs from 'fs';

// format for a bag
//   "bag name": {
//     "another name": 1,
//     "anothernother name": 2
//   }

interface IBags {
  [x: string]: IBagContents;
}
interface IBagContents {
  [x: string]: number;
}

export const totalBagCount = (input: string, bagName: string) => {
  const lines = input.split('\n');
  const bags: IBags = {};

  // Formats a string line into a bag object (see ref. above)
  const formatLine = (line: string) => {
    const bagName = line.split('bags')[0].trim();
    const contentsArr = line.split('contain ')[1].split(', ');

    const contents: IBagContents = {};
    contentsArr.forEach((item) => {
      const count = item.split(' ')[0];
      const name = item.replace(count, '').split('bag')[0].trim();

      if (!isNaN(parseInt(count))) contents[name] = parseInt(count);
    });

    return { name: bagName, contents };
  };

  // Format all bags
  lines.forEach((line) => {
    const { name, contents } = formatLine(line);
    bags[name] = contents;
  });

  // Recursive function to find total children
  const totalBagsInBag = (bag: IBagContents, lookingFor: string, total = 0) => {
    Object.keys(bag).forEach((name) => {
      const count = bag[name];
      if (name === lookingFor) return (total += count);
      return (total = totalBagsInBag(bags[name], lookingFor, total));
    });

    return total;
  };

  // Loop through all bags..
  let total = 0;
  Object.keys(bags).forEach((bag) => {
    if (totalBagsInBag(bags[bag], bagName) > 0) total += 1;
  });

  return total;
};

export const setup = () => {
  const input: string = fs.readFileSync(`${__dirname}/../input.txt`).toString();
  console.log(totalBagCount(input, 'shiny gold'));
};
