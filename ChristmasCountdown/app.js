const clock = document.querySelector("#clock");

function getClock() {
    const christmasEve = new Date("December 24, 2025");
    const date = new Date();
    const diff = christmasEve - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor(diff / (1000 * 60 * 60) % 24)).padStart(2, "0");
    const minutes = String(Math.floor(diff / (1000 * 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(diff / 1000) % 60).padStart(2, "0");
    clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);