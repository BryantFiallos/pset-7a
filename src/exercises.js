function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
  return true;
}
else {
  return false;
}
}

function endsMeet(values, n) {

  let finalArray = [];
if (values != null && values != undefined && n >= 0 && values.length >= n) {
for (let j = 0; j < n; j++) {
  finalArray.push(values[j])
}
for (let j = values.length - n; j < values.length; j++) {
  finalArray.push(values[j])
}
return finalArray;
}
else {
  return finalArray;
}
}


function difference(numbers) {
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
