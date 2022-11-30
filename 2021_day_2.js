const fs = require('fs');
const readFileLines = (filename) => fs.readFileSync(filename).toString('UTF8');

const input = readFileLines('input_day_2.txt')
  .split('\n')
  .map((rowdirection) => {
    const [direction, units] = rowdirection.split(' ');
    return [direction, Number(units)];
  });

// task 1 -> https://adventofcode.com/2021/day/2
const calculatePosition = (directions) => {
  const { forward, down, up } = directions.reduce(
    (acc, [direction, units]) => {
      acc[direction] += units;
      return acc;
    },
    { forward: 0, down: 0, up: 0 }
  );
  return forward * (down - up);
};

const answer1 = calculatePosition(input); // 2322630;
console.log(`https://adventofcode.com/2021/day/2 -> answer: ${answer1}`);
debugger;

// task 2 -> https://adventofcode.com/2021/day/2#part2
const calculatePositionWithAim = (directions) => {
  const { horizontal, depth } = directions.reduce(
    (acc, [direction, units]) => {
      switch (direction) {
        case 'forward': {
          acc.horizontal += units;
          acc.depth += acc.aim * units;
          break;
        }
        case 'up': {
          acc.aim -= units;
          break;
        }
        case 'down': {
          acc.aim += units;
          break;
        }
      }
      return acc;
    },
    { horizontal: 0, depth: 0, aim: 0 }
  );
  return horizontal * depth;
};

const answer2 = calculatePositionWithAim(input); // 2105273490;
console.log(`https://adventofcode.com/2021/day/2#part2 -> answer: ${answer2}`);
debugger;
