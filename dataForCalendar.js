const currentYear = new Date().getFullYear();

// Accepts a year in YYYY format
const checkIfLeapYear = (year) => {
  /* Return true for leap years false other wise */
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
};

// Data array of objects with associated information
const monthData = [
  { monthName: "January", monthAbbr: "Jan", number: 1, days: 31 },
  {
    monthName: "February",
    monthAbbr: "Feb",
    number: 2,
    days: checkIfLeapYear(currentYear) ? 29 : 28,
  },
  { monthName: "March", monthAbbr: "Mar", number: 3, days: 31 },
  { monthName: "April", monthAbbr: "Apr", number: 4, days: 30 },
  { monthName: "May", monthAbbr: "May", number: 5, days: 31 },
  { monthName: "June", monthAbbr: "Jun", number: 6, days: 30 },
  { monthName: "July", monthAbbr: "Jul", number: 7, days: 31 },
  { monthName: "August", monthAbbr: "Aug", number: 8, days: 31 },
  { monthName: "September", monthAbbr: "Sep", number: 9, days: 30 },
  { monthName: "October", monthAbbr: "Oct", number: 10, days: 31 },
  { monthName: "November", monthAbbr: "Nov", number: 11, days: 30 },
  { monthName: "December", monthAbbr: "Dec", number: 12, days: 31 },
];

// Returns days since Jan 1st
const dayOfTheYear = (
  date = { month: new Date().getMonth(), day: new Date().getDate() }
) => {
  const accDays = monthData.slice(0, date.month);
  const daysSinceJanOne = accDays.reduce(
    (acc, currentValue) => acc + currentValue.days,
    0
  );
  return daysSinceJanOne + date.day;
};

// Days left in month
const daysLeftInMonth = (date) => {
  const daysTillEndOfMonth = monthData[date.month - 1].days;
  return daysTillEndOfMonth - date.day;
};

export default {
  currentYear,
  checkIfLeapYear,
  monthData,
  dayOfTheYear,
  daysLeftInMonth,
};
