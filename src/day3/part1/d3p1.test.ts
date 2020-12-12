import { treesEncountered } from '.';

test('treesEncountered function works with example values', () => {
  const map = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];

  expect(treesEncountered(map)).toBe(7);
});
