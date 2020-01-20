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

  let largestNumber = 0;
  let smallestNumber = Number.MAX_SAFE_INTEGER;
  if (numbers != undefined && numbers.length >= 1) {
    for(let j = 0; j < numbers.length; j++) {
      if (isNaN(numbers[j]) == true)
      return undefined;
    }
for (let j = 0; j < numbers.length; j++) {
if (numbers[j] > largestNumber) {
  largestNumber = numbers[j]
}
}
for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] < smallestNumber) {
    smallestNumber = numbers[j];
  }
}
let subtraction = Number(largestNumber - smallestNumber);
return subtraction;
  }
  else {
    return undefined;
  }
}

function max(number) {

  let result = [];
  if (number != undefined && number.length % 2 == 1 && number.length >= 3){
    for(let j = 0; j < number.length; j++) {
      if (isNaN(number[j]) == true)
      return undefined;
    }
    let first = number[0];
    result.push(first);
    let middle = number[Math.floor(number.length / 2)];
    result.push(middle);
    let last = number[number.length - 1];
    result.push(last);
    let largest = Math.max(...result);
    return largest;
  }
else {
  return undefined;
}
}

function middle(values) {

  let result = [];
  let empty = [];
  if (values != undefined && values.length % 2 == 1 && values.length >= 3) {
    let middle = Math.floor(values.length / 2)
    let middleValue1 = values[(Math.floor(values.length / 2)) - 1];
    let middleValue2 = values[Math.floor(values.length / 2)]
    let middleValue3 = values[(Math.floor(values.length / 2)) + 1]
    if (middleValue1 != undefined) {
      result.push(middleValue1)
    }
    if (middleValue2 != undefined) {
      result.push(middleValue2)
    }
    if (middleValue3 != undefined) {
      result.push(middleValue3)
    }
    return result;
  }
  else {
    return empty;
  }
}

function increasing(numbers) {

  let result = [];
  let status = "";
  if (numbers != undefined && numbers.length >= 1) {
    for(let j = 0; j < numbers.length; j++) {
      if (isNaN(numbers[j]) == true)
      return false;
    }
for (let j = 0; j < numbers.length; j++) {
  number1 = numbers[j];
  number2 = numbers[j + 1];
  number3 = numbers[j + 2];
  if (number2 > number1 && number3 > number2) {
    status = true;
    break;
  }
  else {
    status = false;
  }
}
return status;
}
else {
  return false;
}
}

function everywhere(values, x) {

  if (values != undefined && values.length >= 1 && x != undefined) {
    for(let j = 0; j < values.length; j++) {
      if (values[j] === x || values[j - 1] === x || values[j + 1] === x) {
        status = true;
      }
      else {
        return false;
      }
    }
    return status
  }
  else {
    return false;
  }
}

function consecutive(numbers) {

  let status = false;
  if (numbers != undefined && numbers.length >= 2) {
    for (let j = 0; j < numbers.length; j++) {
      if (Number.isInteger(numbers[j]) == false) {
        return false;
      }
    }
    for (let j = 0; j < numbers.length; j++) {
      number1 = numbers[j];
      number2 = numbers[j + 1];
      number3 = numbers[j + 2];
      if (number1 % 2 == 0 && number2 % 2 == 0 && number3 % 2 == 0) {
        status = true;
        break;
      }
      else if (number1 % 2 == 1 && number2 % 2 == 1 && number3 % 2 == 1) {
        status = true;
        break;
      }
      else {
        status = false;
      }
    }
    return status;
  }
  else {
    return false;
  }
}

function balance(numbers) {

  let status = false;
  let sum1 = 0;
  let sum2 = 0;
  if (numbers != undefined && numbers.length >= 2) {
    for (let j = 0; j < numbers.length; j++) {
      if (Number.isInteger(numbers[j]) == false) {
        return false;
      }
    }
    for (let j = 0; j < numbers.length; j++) {
      sum1 += numbers[j]
      sum2 = 0;
      for (let x = j+1; x < numbers.length; x++) {
        sum2 += numbers[x]
      }
      if (sum1 == sum2) {
        status = true;
        break;
      }
    }
    return status;
  }
  else {
    return false;
  }
}

function clumps(values) {
  
  let clumpCounter = 0;
  let checker = "";
  if (values != undefined) {
    for (j = 0; j < values.length; j++) {
      valueBefore = values[j - 1]
      value = values[j]
      valueAfter = values [j + 1]
      if (valueBefore === value) {
      }
      else if (value === valueAfter) {
        clumpCounter++
      }
    }
    return clumpCounter;
  }
  else {
    return -1;
  }
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
