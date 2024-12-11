// function displayTime() {
//     const now = new Date();
//     const hours = now.getHours()
//     const minutes = now.getMinutes()
//     const seconds = now.getSeconds()
//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// function startClock() {
//     function updateClock() {
//         displayTime();
//         setTimeout(updateClock, 1000);
//     }
//     updateClock();
// }

// startClock();
function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

function startClock() {
    const timesToUpdate = 60; // Number of times to update the clock

    for (let i = 0; i < timesToUpdate; i++) {
        setTimeout(() => {
            displayTime();
        }, i * 1000); // Schedule updates 1 second apart
    }
}

startClock();
