// -------------------
// HELPER FUNCTIONS
// -------------------
const findType = (input) => {
  if (!isNaN(input)) return "integer";
  if (input.split("/").length === 3) return "calDate";
  if (input.split("-").length === 3) return "formDate";
  return "display";
};

const formatDate = (date) => (date < 10 ? `0${date}` : `${date}`);

const stringToInt = (inpString, isCalDate) => {
  const times = isCalDate
    ? inpString.split("/")
    : inpString.split("-").reverse();
  const numTimes = times.map((timeString) => Number(timeString));
  const date = new Date(numTimes[2], numTimes[1] - 1, numTimes[0]);
  return Number(date);
};

const dateArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const datesArr = (date) => {
  const inpDay = formatDate(date.getDate());
  const inpMonth = formatDate(date.getMonth() + 1);
  const inpYear = formatDate(date.getFullYear());
  return [inpDay, inpMonth, inpYear];
};

const dateSuffix = (date) => {
  const lastDigit = date.toString().substr(-1);
  if (date === 11 || date === 12 || date === 13) return "th";
  if (lastDigit === "1") return "st";
  if (lastDigit === "2") return "nd";
  if (lastDigit === "3") return "rd";
  return "th";
};

const fDay = 86400000;

// -------------------
// CALLABLE FUNCTIONS
// -------------------
const toInt = (input, plus = 0) => {
  const inputType = findType(input);
  if (inputType === "integer") return Number(input) + plus * fDay;
  if (inputType === "calDate") return stringToInt(input, true) + plus * fDay;
  if (inputType === "formDate") return stringToInt(input, false) + plus * fDay;
  return false;
};

const toDate = (input, plus = 0) => {
  const inputInt = toInt(input, plus);
  return new Date(inputInt);
};

const toCalDate = (input, plus = 0) => {
  const myDates = datesArr(toDate(input, plus));
  return `${myDates[0]}/${myDates[1]}/${myDates[2]}`;
};

const toFormDate = (input, plus = 0) => {
  const myDates = datesArr(toDate(input, plus));
  return `${myDates[2]}-${myDates[1]}-${myDates[0]}`;
};

const display = (input, plus = 0) => {
  const myDate = toDate(input, plus);
  const inpMonth = myDate.getMonth();
  const suffix = dateSuffix(myDate.getDate());
  return `${dateArr[inpMonth]} ${myDate.getDate()}${suffix}`;
};

const weekDay = (input, plus = 0) => {
  const myDate = toDate(input, plus);
  return weekArr[myDate.getDay()];
};

const day = {
  toInt,
  toDate,
  toCalDate,
  toFormDate,
  display,
  weekDay,
};

module.exports = day;
