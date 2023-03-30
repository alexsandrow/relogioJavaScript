let timerIntervalId = null;
  let hour = 0;
  let min = 0;
  let sec = 0;

  function startTimer() {
    if (timerIntervalId !== null) {
      return;
    }

    timerIntervalId = setInterval(() => {
      sec++;

      if (sec === 60) {
        min++;
        sec = 0;
      }

      if (min === 60) {
        hour++;
        min = 0;
      }

      updateClock(hour, min, sec);
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }

  function resetTimer() {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
    hour = 0;
    min = 0;
    sec = 0;
    updateClock(hour, min, sec);
  }

  function setTimer() {
    const inputHour = parseInt(document.getElementById('inputHour').value);
    const inputMin = parseInt(document.getElementById('inputMin').value);
    const inputSec = parseInt(document.getElementById('inputSec').value);

    hour = isNaN(inputHour) ? 0 : inputHour;
    min = isNaN(inputMin) ? 0 : inputMin;
    sec = isNaN(inputSec) ? 0 : inputSec;

    updateClock(hour, min, sec);

    if (timerIntervalId !== null) {
      return;
    }

    timerIntervalId = setInterval(() => {
      sec--;

      if (sec <= 0) {
        min--;
        sec = 59;
      }

      if (min <= 0) {
        hour--;
        min = 59;
      }

      if (hour <= 0) {
        hour = 0
      }

      updateClock(hour, min, sec);
    }, 1000);
  }

  function updateClock(hour, min, sec) {
    document.getElementById('hourTimer').innerText = formatTime(hour);
    document.getElementById('minTimer').innerText = formatTime(min);
    document.getElementById('secTimer').innerText = formatTime(sec);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }