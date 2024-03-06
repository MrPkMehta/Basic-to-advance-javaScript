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