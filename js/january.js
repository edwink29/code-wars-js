// function squareDigits(nums) {
//   let digits = nums
//     .toString()
//     .split("")
//     .map((n) => parseInt(n));
//   let result = digits.map((n) => n * n);
//   let hasil = parseInt(result.join(""));
//   return hasil;
// }

// console.log(squareDigits(9119)); // Output: 5776
// console.log(squareDigits(123));

// function numberToString(num) {
//   return num.toString();
// }
// console.log(typeof numberToString(124));

function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }

  return result;
}

console.log(repeatStr(5, "abc"));
