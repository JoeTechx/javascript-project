const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
let tempYear = tempDate.getDate.getFullYear();
let tempMonth = tempDate.getMonth();
let temp = tempDate.getDate();

// let futureDate = new Date(2022, 3, 23, 11, 30, 0);
// console.log(futureDate);
const futureDate = new Date(tempYear,tempMonth,tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(hours);
  // console.log(minutes);
  // console.log(seconds);

  // set values array;
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t< 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4class="expired"> sorry, this giveaway has expired</h4>`;
  }
}
// start the countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
