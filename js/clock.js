const clockContainer = document.querySelector(".js-clock"); // querySelector가 아니라 clssa or id 값으로 가지고 와도 됌.
const clockTitle = clockContainer.querySelector("h1"); // <div> 박스 안에 있는 선택자를 지정, 원하는 모든 것이 가능!

function getTime() {
    const date = new Date(); // 내장 돼 있는 Date 객체에서 시간을 가지고 올 수 있음.
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // querySelector로 (" 속성 가지고 와서 적용시킬 수 있음 ")
    // Ternary operators 로 true or false 값을 반환
    // true : hours, minutes,seconds 의 값이 10이하일 때 앞에 0을 붙여줌, false : 10 이상부터는 기존의 값.

    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;

}

function init () {
    getTime();
    // setInterval로 1초마다 사이트에 호출할 수 있도록 동작
    setInterval(getTime,1000);
}

init();