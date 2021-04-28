'use strict';
var score = 0;


let userName =prompt('Hi, Could You please tell me Your Name?');
console.log(userName);

let x =confirm('Nice to Meet You ' + userName + ' We Will Play a Game,'
+' Please Answer with Yes/No OR  Y/N  ok?');

function qusetion1(){

let color = prompt('Do you think I like Purple Color?');
console.log(color);


switch (color.toUpperCase()) {
case 'YES':
case 'Y':
//console.log('yes You Right, I like Purple');
alert('yes You Right, I like Purple');
 score++;
 console.log(score);

    break;
case 'NO':
case 'N':
//console.log('Wrong, I like Purple');
alert('Wrong, I like Purple');
    break;
}
}
qusetion1();

function qusetion2(){

let z= prompt('Do you think I Like reading books?');
console.log(z);

switch (z.toUpperCase()){
    case 'YES':
    case 'Y':
    //console.log('Yes, I Like reading Books');
   alert('Yes, I Like reading Books');
   score++;
   console.log(score);

   break;
   case 'NO':
    case 'N':
       // console.log('You Wrong, I Like Reading Books');
        alert('You Wrong, I Like Reading Books');
       break;
}
}
qusetion2();


function qusetion3(){

let movies = prompt('ok Do you think I Like Frozen Movie?');
console.log(movies);


switch (movies.toUpperCase()) {
case 'YES':
case 'Y':
//console.log('it\'s a nice movie');
alert('no, i Don\'t Like this movie');
break;
case 'NO':
    case'N':
    //console.log('i think you like another movie');
    alert('Correct, I don\'t Like Frozen Movie');
    score++;
    console.log(score);

    break;
}
}
qusetion3();

function qusetion4(){

let fruit= prompt('What about Fruits, Do You think i like Apple?');
console.log(fruit);

switch (fruit.toUpperCase()){
    case 'YES':
    case 'Y':
    //console.log('i like all kinds of Fruits');  
   alert('i like all kinds of Fruits');
   score++;
   console.log(score);

   break;
   case 'NO':
    case 'N':
    // console.log('no, i like apple it has a Good Taste!');
alert('no, i like apple it has a Good Taste!');
       break;
}
}
qusetion4();

function qusetion5(){

let like= prompt('Do you think I like coffee?');
console.log(like);

switch (like.toUpperCase()){
    case 'YES':
    case 'Y':
    //console.log('yes i like coffee');
   alert('yes i like coffee');
   score++;
   console.log(score);

   break;
   case 'NO':
    case 'N':
      //  console.log('no I Like Coffee, coffee is delicious');
alert('no I Like Coffee, coffee is delicious');
       break;
}
}
qusetion5();

//-------------------------//

alert('Now answer with a Number, it\'s guessing a number game, ok?');

function qusetion6(){

let ss= alert('Can You Guess How Many times I eat in Ramadan Night?');


let myNumber = 3;

for (let i = 1; i <= 4; i++) {

    let userNumberr= Number(prompt('guess a number between 0 and 5'));
    console.log(userNumberr);
    if (userNumberr < myNumber) {
        alert('too low');
    }

    else if (userNumberr > myNumber) {
        alert('too high');

    }
    else if (userNumberr == 3) {

        alert('Correct, You Right');
        score++;
        console.log(score);

        break;

    }}

    alert('actually i eat 3 times in Ramadan Night ');
}
qusetion6();
    //----------------------------------------


alert('Now Guess between 6 options of my Favorite Fast Meals, Enter Words Ok?');

function qusetion7(){

let myMeal = ['pizza', 'burger', 'pasta','chicken','fish','sushi'];
console.log(myMeal);


for (let i = 0; i <= 5; i++) {
let userFood=prompt('Can you guess what is my favorite fast food?').toLowerCase();
console.log(userFood);

if (userFood === myMeal[0] || userFood === myMeal[1] || userFood === myMeal[2] || userFood === myMeal[3] || userFood === myMeal[4] || userFood === myMeal[5]){
    alert('Great, this one of my fav meals');
    score++;
    console.log(score);

    break;
}else {
    alert('Try to Guess again');

}

}
alert('my favorite fast meals : pizza, burger, pasta, chicken, fish, sushi');
}
qusetion7();

console.log('Total score is ' + score);
alert('I enjoyed with you '+ userName + ' Your Total Score is '+ score + ' , have a Nice day');
