let result = [];
if (numbers != undefined && numbers.length >= 3) {
  for(let j = 0; j < numbers.length; j++) {
    if (isNaN(numbers[j]) == true)
    return false;
  }
numbers.forEach((number) => {
let place = numbers.indexOf(number)
number1 = numbers[place];
number2 = numbers[place + 1];
number3 = numbers[place + 2];
if (number2 > number1 && number3 > number2) {
  return true;
}
else {
  return false;
}
});
}


}
else {
return false;
}



//balance

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
    for (let x = numbers.length - 1; x >= 0; x--) {
      sum2 += numbers[x]
    }
    if (sum1 == sum2) {
      status = true;
    }
  }
  return status;
}
else {
  return false;
}








//BALANCE 15 OUT OF 17

let status = false;
let sum1 = 0;
let sum2 = 0;
if (numbers != undefined && numbers.length >= 2) {
  for (let j = 0; j < numbers.length; j++) {
    if (Number.isInteger(numbers[j]) == false) {
      return false;
    }
  }
  if (numbers.length % 2 == 0) {
    let middle = (numbers.length / 2) - 1;
    for (let j = 0; j <= middle; j++) {
      sum1 += numbers[j];
    }
    for (let j = middle + 1; j < numbers.length; j++) {
      sum2 += numbers[j];
    }
    if (sum1 == sum2) {
      status = true;
    }
  }
  else if (numbers.length % 2 == 1) {
    let middle = Math.floor(numbers.length / 2)
    for (let j = 0; j < middle; j++) {
      sum1 += numbers[j];
    }
    for (let j = middle + 1; j < numbers.length; j++) {
      sum2 += numbers[j];
    }
    if (sum1 + numbers[middle] == sum2 || sum1 == numbers[middle] + sum2) {
      status = true;
    }
  }
  return status;
}
else {
  return false;
}
