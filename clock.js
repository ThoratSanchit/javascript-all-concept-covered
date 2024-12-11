function clock() {
  let date = new Date();
  let minute = date.getMinutes();
  let hours = date.getHours();
  let second = date.getSeconds();
  console.log(`${hours}:${minute}:${second}`);
}

// let update = 60;
// for (let i = 0; i < update; i++) {
//   setTimeout(() => {
//     clock();
//   }, i * 1000);
// }



function start(){
    setInterval(clock,1000);
}

start();