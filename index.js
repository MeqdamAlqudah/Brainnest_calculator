import calculate from './calculatorLogic/calculate.js';

let calculateObj = {
  total: null,
  next: null,
  operation: null,
};

// selectScreen
const screen = document.querySelector('.screen-vlaue');
screen.setAttribute('value', calculateObj.total ? calculateObj.total : 0);
// select containers
const numbersContainer = document.querySelector('.numbers');
const firstOperationsContainer = document.querySelector('.operations-up');
const secondOperationsContainer = document.querySelector('.operations-down');
// create a numbers buttons list
const numbersArray = Array.from({ length: 10 }, (v, i) => String(i)).reverse();
numbersArray.push('.');
// create operation-1 buttons list
const firstOperationsArray = ['AC', '+/-', '%'];
// create operation-2 buttons list
const secondOperationsArray = ['/', 'x', '-', '+', '='];
// generate elements for each button
numbersArray.forEach((el) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = el;
  li.appendChild(button);
  button.style.backgroundColor = '#217C7E';
  button.addEventListener('click', () => {
    screen.setAttribute('value', calculateObj.next ? calculateObj.next + el : el);
    calculateObj = calculate(calculateObj, el);
  });
  if (el === '0') {
    button.style.width = '126px';
  }
  numbersContainer.appendChild(li);
});
firstOperationsArray.forEach((el) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = el;
  button.style.backgroundColor = 'dodgerblue';
  li.appendChild(button);

  button.addEventListener('click', () => {
    calculateObj = calculate(calculateObj, el);
  });
  firstOperationsContainer.appendChild(li);
});
secondOperationsArray.forEach((el) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = el;
  button.style.backgroundColor = '#FF8F1F';
  li.appendChild(button);
  button.addEventListener('click', () => {
    calculateObj = calculate(calculateObj, el);
    if (el === '=') {
      screen.setAttribute('value', calculateObj.total);
    }
  });

  secondOperationsContainer.appendChild(li);
});