const testData = [
  [0, 1, 0, 0, 3, 2],
  [0, 2, 1, 0, 1, 1],
  [0, 1, 2, 1, 1, 2],
];

const allFormsComplete = (formsArr) => {
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
  return myBestDays;
};

// =====================
// CALLABLE
// =====================

const getBestDay = (formsArr) => {
  const bestDaysArr = bestDays(formsArr);
  return bestDaysArr[0];
};

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
