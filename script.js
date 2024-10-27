let hour = 0;
let minute = 0;
let second = 0;
let counter = 0;
let timer = null;

const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const count = document.getElementById("count");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "start" && !timer) {
            timer = setInterval(() => {
                counter++;
                count.innerHTML = counter;

                if (counter === 100) {
                    second++;
                    sec.innerHTML = second < 10 ? '0' + second : second; 
                    counter = 0;
                }
                if (second === 60) {
                    minute++;
                    min.innerHTML = minute < 10 ? '0' + minute : minute; 
                    second = 0;
                }
                if (minute === 60) {
                    hour++;
                    hr.innerHTML = hour < 10 ? '0' + hour : hour; 
                    minute = 0;
                }
            }, 10);
        }

        if (button.id === "stop" && timer) {
            clearInterval(timer);
            timer = null;
        }

        if (button.id === "restart") {
            clearInterval(timer);
            timer = null;
            hour = 0;
            minute = 0;
            second = 0;
            counter = 0;
            hr.innerHTML = '00';
            min.innerHTML = '00';
            sec.innerHTML = '00';
            count.innerHTML = '00';
        }
    });
});
