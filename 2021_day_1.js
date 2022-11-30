const fs = require('fs');
const readFileLines = (filename) => fs.readFileSync(filename).toString('UTF8');

const input = readFileLines('input_day_1.txt').split('\n').map(Number);

// task 1 -> https://adventofcode.com/2021/day/1
const calculateDepthIncreases = (depths) => {
  let amountOfDepthIncrease = 0;
  for (let i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) {
      amountOfDepthIncrease++;
    }
  }
  return amountOfDepthIncrease;
};

const answer1 = calculateDepthIncreases(input); // 1233;
console.log(`https://adventofcode.com/2021/day/1 -> answer: ${answer1}`);
debugger;

// task 2 -> https://adventofcode.com/2021/day/1#part2
const calculateDepthIncreasesWithWindow = (depths, winwdowSize = 1) => {
  let amountOfDepthIncrease = 0;
  let prevSum = 0;
  let j = 0;
  while (winwdowSize > j) {
    prevSum += depths[j++];
  }
  for (let i = winwdowSize; i < depths.length; i++) {
    const nextSum = prevSum - depths[i - winwdowSize] + depths[i];
    if (nextSum > prevSum) {
      amountOfDepthIncrease++;
    }
    prevSum = nextSum;
  }
  return amountOfDepthIncrease;
};

const answer2 = calculateDepthIncreasesWithWindow(input, 3); // 1275;
console.log(`https://adventofcode.com/2021/day/1#part2 -> answer: ${answer2}`);
debugger;
