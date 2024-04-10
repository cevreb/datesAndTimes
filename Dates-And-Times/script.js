// Your code here

const currentDate = new Date();

//to create and return a new date obj:
const getDateObject = function () {
  return new Date();
};

const dateObject = getDateObject();
console.log(dateObject);

//to get the current timestamp:
const getNumericTimestamp = function () {
  return Date.now();
};

const timeStamp = getNumericTimestamp();
console.log(timeStamp);

//to get the day of the week:
const getDayOfTheWeek = function (currentDate) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
};

const dayOfTheWeek = getDayOfTheWeek(currentDate);
console.log(dayOfTheWeek);

//to format the date:
const getFormattedDate = function (currentDate) {
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear() % 100;
  let hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const period = hour < 12 ? "am" : "pm";

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }

  const formattedDate = `${month}/${day}/${year} - ${hour}:${
    minute < 10 ? "0" : ""
  }${minute}${period}`;

  return formattedDate;
};

const formattedDate = getFormattedDate(currentDate);
console.log(formattedDate);

//how many days apart:
const getDaysAgoString = function (date1, date2) {
  const timeDifference = date2 - date1;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return "Same day";
  } else if (daysDifference === 1) {
    return "Previous day";
  } else {
    return `${daysDifference} days ago`;
  }
};

const date1 = new Date("June 1, 1990");
const date2 = new Date("November 11, 2023");

const daysAgoString = getDaysAgoString(date1, date2);
console.log(daysAgoString);

//stopwatch:
let stopwatchTimer;
let isStopwatchRunning = false;
let stopwatchStartTime;
let stopwatchElapsedTime = 0;

function start() {
  if (!isStopwatchRunning) {
    stopwatchStartTime = Date.now() - stopwatchElapsedTime;
    stopwatchTimer = setInterval(updateStopwatchDisplay, 10);
    isStopwatchRunning = true;
  }
}

function stop() {
  if (isStopwatchRunning) {
    clearInterval(stopwatchTimer);
    isStopwatchRunning = false;
  }
}

function reset() {
  clearInterval(stopwatchTimer);
  isStopwatchRunning = false;
  stopwatchElapsedTime = 0;
  document.getElementById("time-display").innerText = "00:00.000";
}

function updateStopwatchDisplay() {
  const currentTime = Date.now();
  stopwatchElapsedTime = currentTime - stopwatchStartTime;

  const minutes = Math.floor(stopwatchElapsedTime / (60 * 1000));
  const seconds = Math.floor((stopwatchElapsedTime % (60 * 1000)) / 1000);
  const milliseconds = stopwatchElapsedTime % 1000;

  document.getElementById("time-display").innerText = `${pad(
    minutes,
    2
  )}:${pad(seconds, 2)}.${pad(milliseconds, 3)}`;
}

function pad(number, length) {
  let str = `${number}`;
  while (str.length < length) {
    str = `0${str}`;
  }
  return str;
}

//TESTS:

// Tests for getDateObject()
console.log("getDateObject Test 1:");
console.assert(getDateObject() instanceof Date, "Failed");
console.log("Passed");

console.log("getDateObject Test 2:");
console.assert(
  getDateObject().getFullYear() === new Date().getFullYear(),
  "Failed"
);
console.log("Passed");

// Tests for getNumericTimestamp()
console.log("getNumericTimestamp Test 1:");
console.assert(typeof getNumericTimestamp() === "number", "Failed");
console.log("Passed");

console.log("getNumericTimestamp Test 2:");
const timestamp1 = getNumericTimestamp();
const timestamp2 = getNumericTimestamp();
console.assert(timestamp1 <= timestamp2, "Failed");
console.log("Passed");

// Tests for getDayOfTheWeek()
console.log("getDayOfTheWeek Test 1:");
console.assert(
  getDayOfTheWeek(new Date("November 11, 2023")) === "Saturday",
  "Failed"
);
console.log("Passed");

console.log("getDayOfTheWeek Test 2:");
console.assert(
  getDayOfTheWeek(new Date("November 10, 2023")) === "Friday",
  "Failed"
);
console.log("Passed");

// Tests for getFormattedDate()
console.log("getFormattedDate Test 1:");
console.assert(typeof getFormattedDate(new Date()) === "string", "Failed");
console.log("Passed");

console.log("getFormattedDate Test 2:");
const testDate = new Date("January 15, 2023 08:30:00");
console.assert(getFormattedDate(testDate) === "1/15/23 - 8:30am", "Failed");
console.log("Passed");

// Tests for getDaysAgoString()
console.log("getDaysAgoString Test 1:");
const date3 = new Date("November 9, 2023");
const date4 = new Date("November 11, 2023");
console.assert(getDaysAgoString(date3, date4) === "2 days ago", "Failed");
console.log("Passed");

console.log("getDaysAgoString Test 2:");
const date5 = new Date("November 11, 2023");
const date6 = new Date("November 11, 2023");
console.assert(getDaysAgoString(date5, date6) === "Same day", "Failed");
console.log("Passed");
