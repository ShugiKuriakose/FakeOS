const calcTime = () => {
  let todayDate = new Date();
  let hr = todayDate.getHours();
  let min = todayDate.getMinutes();
  let ampm = "AM";
  if (hr > 12) {
    hr = hr - 12;
    ampm = "PM";
  }
  let prepend0 = "";
  if (min < 10) prepend0 = "0";
  return `${hr}:${prepend0}${min} ${ampm}`;
};
setInterval(() => {
  let currTime = calcTime();
  document.getElementById("currentTime").innerHTML = currTime;
}, 1000);

//let currTime = setInterval(calcTime, 1000);
//document.getElementById("currentTime").innerHTML = currTime;
