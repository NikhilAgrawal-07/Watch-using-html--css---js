setInterval(() => {
    todayDate = new Date();
    hourTime = todayDate.getHours();
    minuteTime = todayDate.getMinutes();
    secondTime = todayDate.getSeconds();
    hourRotation = 30*hourTime + minuteTime/2;
    minuteRotation = 6*minuteTime;
    secondRotation = 6*secondTime;
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);