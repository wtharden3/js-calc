let keys = document.querySelectorAll('.key');
Array.from(keys);

let display = document.querySelector('.display p');
let input1 = [];
let input2 = [];
let operator;
let answer;


function handleClick(e){
  e.preventDefault();
  let value = e.target.innerText.toLowerCase();
  if(value === "-"){
    //stop pushing to input1 and push to input2
    //stop displaying input1 and start displaying input2
    //operater = "-"
    operator = "-";
    display.innerText = input2.join("");
  } else if(value === "+"){
    //stop pushing to input1 and push to input2
    //stop displaying input1 and start displaying input2
    //operater = "+"
    operator = "+";
    display.innerText = input2.join("");
  } else if(value === "/"){
    //stop pushing to input1 and push to input2
    //stop displaying input1 and start displaying input2
    //operater = "/"
    operator = "/";
    display.innerText = input2.join("");
  } else if(value === "x"){
    //stop pushing to input1 and push to input2
    //stop displaying input1 and start displaying input2
    //operater = "x"
    operator = "x";
    display.innerText = input2.join("");
  } else if(value === "="){
    //stop pushing to input2 and
    //stop displaying input2 and calculate
    if (operator === "-"){
      //highlight e.target until something else is clicked --> add class with timer
      answer = calcInput(input1, input2, subtract);
      //display answer
      display.innerText = answer;
    } else if(operator === "+"){
      //highlight e.target until something else is clicked --> add class with timer
      answer = calcInput(input1, input2, add);
      //display answer
      display.innerText = answer;
    }  else if(operator === "/"){
      //highlight e.target until something else is clicked --> add class with timer
      answer = calcInput(input1, input2, divide);
      //display answer
      display.innerText = answer;
    }  else if(operator === "x"){
      //highlight e.target until something else is clicked --> add class with timer
      answer = calcInput(input1, input2, multiply);
      //display answer
      display.innerText = answer;
    }
  } else if (value === "c"){
    //highlight e.target until something else is clicked --> add class with timer
    display.innerText = "0";
    input1 = [];
    input2 = [];
    operator = undefined;
    answer = undefined;
    return;
  } else if (value === "+/-"){
    console.log("toggle negative and positive");
  } else if (value === "%" && input2.length > 0){
    console.log("invalid");
  } else if (value === "%" && input2.length < 0){
    console.log("%");
  } else if(operator === undefined){
    input1.push(value);
    console.log(value);
    console.log(input1);
    display.innerText = input1.join("");
  } else {
    input2.push(value);
    console.log(value);
    console.log(input2);
    display.innerText = input2.join("");
  }
}
/////////////

// function handleClickOLD(e){
//   e.preventDefault();
//   let value = e.target.innerText.toLowerCase();
//   if (e.target.classList[1] === "operatorKey"){
//     if(value === "="){
//       //calculate what is in the array
//       let answer = calcInput(input1, input2, add);
//       //display answer
//       display.innerText = answer;

//     }
//     console.log('this is an operator key: ' + value);
//   }
//   if (value.toLowerCase() === "c"){
//     display.innerText = "CLEAR!";
//     console.log('clear the array: ' + input);
//     return input = [];
//   } else {
//     input.push(value);
//     // display.innerText = value;
//     display.innerText = input.join("");
//     console.log(input);
//     console.log(e.target);
//     console.log(value);
//     console.log(e.target.classList[1]);
//   }
// }

function calcInput(array1, array2, operator){
  console.log(array1);
  console.log(array2);
  return operator(array1.join(""), array2.join(""));
}

function add(num1, num2){
  return Number(num1) + Number(num2);
}

function multiply(num1, num2){
  return Number(num1)*Number(num2);
}

function subtract(num1, num2){
  return Number(num1)-Number(num2);
}

function divide(num1, num2){
  return Number(num1)/Number(num2);
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
