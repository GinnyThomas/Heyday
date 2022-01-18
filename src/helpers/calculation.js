const testData = [
  [0, 1, 0, 0, 2, 2],
  [0, 0, 1, 0, 2, 0],
  [0, 1, 2, 1, 2, 2],
];

const isReady = (formsArr) => {
  const valueArr = formsArr.map((form) => form.length);
  //   console.log("Form Lengths: " + valueArr);
  return !valueArr.includes(0);
};

// =====================
// AVAILABILITY
// =====================

const allAvailableForDay = (formsArr, dayIndex) => {
  const available = formsArr.map((form) => form[dayIndex]);
  //   console.log(`Preferences for day ${dayIndex}: ` + available);
  return !available.includes(0);
};

const availableDays = (formsArr) => {
  const days = [];
  formsArr[0].forEach((_day, i) => {
    const isAvailable = allAvailableForDay(formsArr, i);
    if (isAvailable) days.push(i);
  });
  return days;
};

const availableScores = (formsArr) => {
  const availableArr = availableDays(formsArr);
  const scoresArr = dayScores(formsArr);
  return scoresArr.map((score, i) => (availableArr.includes(i) ? score : 0));
};

// =====================
// BEST
// =====================

const dayScore = (formsArr, dayIndex) => {
  let score = 0;
  formsArr.forEach((form) => (score += form[dayIndex]));
  return score;
};

const dayScores = (formsArr) => {
  const scores = formsArr[0].map((_day, i) => dayScore(formsArr, i));
  return scores;
};

const bestDays = (formsArr) => {
  const aScores = availableScores(formsArr);
  const highScore = Math.max(...aScores);
  let myBestDays = [];
  aScores.forEach((score, i) => {
    if (score === highScore) myBestDays.push(i);
  });
  return highScore === 0 ? [-1] : myBestDays;
};

// =====================
// EXTRAS
// =====================

const sumArr = (arr) => arr.reduce((pre, pos) => pre + pos);

const getMedalCount = (formsArr, dayIndex, medalNumber) => {
  const medals = formsArr.map((form) =>
    form[dayIndex] === medalNumber ? 1 : 0
  );
  return sumArr(medals);
};

// =====================
// CALLABLE
// =====================

const getBestDay = (formsArr) => {
  const bestDaysArr = bestDays(formsArr);
  return bestDaysArr[0];
};

const medalCounts = (formsArr, bestDay) => {
  return [
    getMedalCount(formsArr, bestDay, 3),
    getMedalCount(formsArr, bestDay, 2),
    getMedalCount(formsArr, bestDay, 1),
  ];
};

const finalResult = {
  getBestDay,
  isReady,
  medalCounts,
};

module.exports = finalResult;

// What days are everyone free? DONE
// Of those days, which are the best?
// Of the best, which are the soonest?
// console.log(allFormsComplete(testData));
// console.log(allAvailableForDay(testData, 0));
// console.log(allAvailableForDay(testData, 1));
// console.log(availableDays(testData)); // expect: [1, 4]
// console.log(dayScore(testData, 2)); // 4
// console.log(dayScores(testData)); // [0, 4, 3, 1, 5]
// console.log(getBestDay(testData)); // [4, 5]
console.log(medalCounts(testData, 4)); // 1
