const currentTime = document.querySelector("h1"),
  currentDate = document.querySelector("p"),
  content = document.querySelector(".content"),
  selectMenu = document.querySelectorAll("select"),
  setAlarmBtn = document.querySelector("button");


let alarmTime, isAlarmSet, flag = false,
  ringtone = new Audio("https://audio-previews.elements.envatousercontent.com/files/282159655/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22ZWDMY4V-alarm-2.mp3%22");


(function analogclock() {
  setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
  }, 1000);

})();

(function digitalclock() {
  setInterval(() => {
    this.date = new Date(),
      h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds(),
      day = date.getDay(),
      month = date.getMonth(),
      ampm = "AM";
    if (h >= 12) {
      h = h - 12;
      ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    var monthName = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    currentDate.innerText = ` ${weekDays[day]} , ${date.getDate()}-${monthName[month]}-${date.getFullYear()}`

    return currentTime
  })
})();


for (let i = 12; i > 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? `0${i}` : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
  let ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function setAlarm() {
  // console.log("haelo1")
  let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
  if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
    document.getElementById('mod').innerHTML = "Please, select a valid time to set Alarm!"
    content.classList.remove("enable");
  }

  else {
    document.getElementById('mod').innerHTML = `Alarm is set for ${time} `
  }
  setInterval(() => {
    alarmTime = time;
    if (flag === false)
      if (alarmTime === `${h}:${m} ${ampm}`) {
        flag = true;
        // console.log("haelo2")
        ringtone.play();
        ringtone.loop = false;
        content.classList.add("enable");
        document.getElementById('mod').innerHTML = `<img class="loading-image" src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif">`
      }
  })
}

function clearAlarm() {

  alarmTime = ""

  ringtone.pause();
  content.classList.add("enable");
  content.classList.add("reset");

}


$('close').on("click", function(){
$('#bd').load(' #bd')
alert('Reloaded')
});
document.getElementById('close').addEventListener("click", clearAlarm);
setAlarmBtn.addEventListener("click", setAlarm);



