let keys = document.querySelectorAll('.key');
Array.from(keys);

let display = document.querySelector('.display p');
let input = [];


function handleClick(e){
  e.preventDefault();
  let value = e.target.innerText.toLowerCase();
  if (e.target.classList[1] === "operatorKey"){
    if(value === "="){
      //calculate what is in the array
      let answer = calcInput(input);
      //display answer
      display.innerText = answer;
    }
    console.log('this is an operator key: ' + value);
  }
  if (value.toLowerCase() === "c"){
    display.innerText = "CLEAR!";
    console.log('clear the array: ' + input);
    return input = [];
  } else {
    display.innerText = value;
    input.push(value);
    console.log(input);
    console.log(e.target);
    console.log(value);
    console.log(e.target.classList[1]);
  }
}

function calcInput(array){
  console.log(array);
  return "the answer";
}

function add(num1, num2){
  return num1 + num2;
}

function multiply(num1, num2){
  return num1*num2;
}

function subtract(num1, num2){
  return num1-num2;
}

function divide(num1, num2){
  return num1/num2;
}


function calculate(num1, num2, operator){
  return operator(num1,num2);
}

function turnToPercentage(num){
  return num * 100;
}

for(const key of keys){
  key.addEventListener('click', handleClick);
}
