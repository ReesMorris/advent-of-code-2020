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

  expect(treesEncountered(map, 1, 1)).toBe(2);
  expect(treesEncountered(map, 3, 1)).toBe(7);
  expect(treesEncountered(map, 5, 1)).toBe(3);
  expect(treesEncountered(map, 7, 1)).toBe(4);
  expect(treesEncountered(map, 1, 2)).toBe(2);
});
