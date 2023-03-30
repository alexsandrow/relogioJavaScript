let timezoneOffset = parseInt(document.getElementById("timezone").value);

function updateClock() {
  let now = new Date();
  now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + timezoneOffset * 60);
  document.getElementById("hour").textContent = padLeftZero(now.getHours());
  document.getElementById("min").textContent = padLeftZero(now.getMinutes());
  document.getElementById("sec").textContent = padLeftZero(now.getSeconds());
}

function padLeftZero(number) {
  return String(number).padStart(2, "0");
}

document.getElementById("timezone").addEventListener("change", function() {
  timezoneOffset = parseInt(this.value);
  updateClock();
});

// atualiza o relógio a cada segundo
setInterval(updateClock, 1000);