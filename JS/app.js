'use strict';

let userName =prompt('Hi, Could You please tell me Your Name?');
console.log(userName);

let x =confirm('Nice to Meet You ' + userName + ' We Will Play a Game,'
+' Please Answer with Yes/No OR  Y/N  ok?');

let color = prompt('Do you think I like Purple Color?');
console.log(color);


switch (color.toUpperCase()) {
case 'YES':
case 'Y':
//console.log('yes You Right, I like Purple');
alert('yes You Right, I like Purple');
    break;
case 'NO':
case 'N':
//console.log('Wrong, I like Purple');
alert('Wrong, I like Purple');
    break;
}


let z= prompt('What about you? Do You like Purple?');
console.log(z);

switch (z.toUpperCase()){
    case 'YES':
    case 'Y':
    //console.log('We like The same Color');
   alert(' We like The same Color');
   break;
   case 'NO':
    case 'N':
       // console.log('i guess You like another color');
        alert('i guess You like another color');
       break;
}



let movies = prompt('ok i Guess you like Frozen Moveie, just like me?');
console.log(movies);


switch (movies.toUpperCase()) {
case 'YES':
case 'Y':
//console.log('it\'s a nice movie');
alert('it\'s a nice movie');
    break;
case 'NO':
case'N':
//console.log('i think you like another movie');
alert('i think you like another movie');
    break;
}

let fruit= prompt('What about Fruits, Do You think i like Apple?');
console.log(fruit);

switch (fruit.toUpperCase()){
    case 'YES':
    case 'Y':
    //console.log('i like all kinds of Fruits');  
   alert('i like all kinds of Fruits');
   break;
   case 'NO':
    case 'N':
    // console.log('no, i like apple it has a Good Taste!');
alert('no, i like apple it has a Good Taste!');
       break;
}

let like= prompt('did you liked this guessing game?');
console.log(like);

switch (like.toUpperCase()){
    case 'YES':
    case 'Y':
    //console.log('Thank You For visiting My Page have a Nice day');
   alert('Thank You');
   break;
   case 'NO':
    case 'N':
      //  console.log('I Hope you liked Next Time');
alert('I Hope you liked Next Time');
       break;
}
alert('I enjoyed with you '+ userName + ', I hope you visit my page again, have a Nice day');
