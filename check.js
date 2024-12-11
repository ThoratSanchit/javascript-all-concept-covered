let s = "php";
let s1 = "";

for (let i = s.length - 1; i >= 0; i--) {
  s1 += s[i];
  // s1.concat(s[i])
}

if (s === s1) {
  console.log("polimdroe");
} else {
  console.log("not");
}

console.log(performance.now())