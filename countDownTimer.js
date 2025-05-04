// taget date given as "yyyy-mm-ddThh:mm:ss" via a new Date object
function countdown(targetDate) {
  targetDate = targetDate.getTime(); // sets date object to epoch time in milliseconds
  // Following is the break down of calculated time intervals
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4.333333333;
  const year = month * 12;

  // updateCountDown subtracts epoch time todays date from epoch time future date and returns the response in milliseconds
  function updateCountDown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Clears the clock once the target date is reached
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      return;
    }

    const years = Math.floor(timeLeft / year);
    const months = Math.floor((timeLeft % year) / month);
    const weeks = Math.floor((timeLeft % month) / week);
    const days = Math.floor((timeLeft % week) / day);
    const hours = Math.floor((timeLeft % day) / hour);
    const minutes = Math.floor((timeLeft % hour) / minute);
    const seconds = Math.floor((timeLeft % minute) / second);

    // Change to a return statement
    // return {years: years, months: months, weeks: weeks, days: days, hours: hours, minutes: minutes, seconds: seconds}
    console.log(
      `years: ${years}, months: ${months}, weeks: ${weeks}, days: ${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`
    );
  }

  updateCountDown();
  const timerInterval = setInterval(updateCountDown, 5000); // Sets a time duration between function calls to updateCountDown
}

const targetDate = new Date("2025-05-25T17:00:00");

countdown(targetDate);
