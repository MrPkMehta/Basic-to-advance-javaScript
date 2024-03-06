# Projects releted to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# solution code

## project 1 color Changer

``` javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (e) {
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = 'white'
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
    }
  });
});

```

## project 2 BMI Calculator

``` javascript
const form = document.querySelector('form');

//to prevent default value because when we submit form in that time data is shown in the text bar
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show results
    results.innerHTML = `<span> Your BMI is ${bmi}</span>`;

    const displayCondition = document.querySelector('#condition');

    if (bmi < 18.6) {
      displayCondition.innerHTML = 'Under Weight';
      displayCondition.style.color = 'red';
    } else if (bmi > 18.5 && bmi < 24.9) {
      displayCondition.innerHTML = 'Normal Weight';
      displayCondition.style.color = 'green';
    } else {
      displayCondition.innerHTML = 'Overweight !';
      displayCondition.style.color = 'red';
    }
  }
});
```