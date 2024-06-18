function RemainingTime() {
  const now = new Date();

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const remainingMinutes = 1440 - currentMinutes;

  const remainingHours = (remainingMinutes / 60).toFixed(1);

  document.getElementById(
    "demo"
  ).innerHTML = `Remaining ${remainingHours}hrs of your day`;

  const input = document.getElementById("myinput");

  const number = parseInt(input.value);

  const concat = number / 60;

  const matter = concat.toFixed(1);

  const fix = remainingHours - concat;

  document.getElementById(
    "dance"
  ).innerHTML = `It will remain ${fix}hrs if you use ${number}min`;
}


const Movement = setInterval(() => {
  




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

const daeys = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date(),
  m = new Date();
let month = months[d.getMonth()];
let Days = daeys[m.getDay()];

let time = new Date()
let currentTime = time.getHours() % 12
let currentMinute = time.getMinutes()
let currentSeconds = time.getSeconds()
let text = '';
if(currentTime >= 12){
  text = "AM" 
} else{
  text = "PM"
}
 document.getElementById("known").innerHTML = `${setFormat(currentTime)} : ${currentMinute} : ${currentSeconds} ${text} `
}, 1000)

const setFormat = (t) => {
  return t < 10 ? `0${t}` : t;
}

