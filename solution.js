// 1:
const determiner = 85;
const x = determiner >= 0 ? "Greater or equal to 0" : "Less than 0";
console.log(x);
// 2:
let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  const message = "Positive integer";
  console.log("message:", message);
} else {
  updater = "Less than 0";
}
console.log(updater);
// 3:
const y = x == 42 ? true : false;
