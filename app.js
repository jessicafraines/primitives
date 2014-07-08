// this is a single line comment
//
//
/* this
 * is
 * a
 * multiline
 */
var a = 3;
var b = 2;
var c = a + b;


console.log('this is a string');
console.log(a);
console.log(b);
console.log(c);

var first = 'sally';
var last = 'smith';
var fullName = first + ' ' + last;
console.log(fullName);
console.log(first);
console.log(last);


var d = Math.pow(2,8);

console.log('2^8 ===', d);

var a = 3
var b = 4
var c = 5
var d = 6

var e = Math.pow((a+b)/(b-c)*(b-a)/(c-d),(b+a));
console.log(e);



// branching with if/else statements
//


var age = 20;

if(age >= 21)
{console.log('you are legal to drink');}
else{
  console.log('you are not legal to drink');}

// this is the maximum allowed rating you can see
//
if(age >= 0 && age <= 5){
  console.log('G rated');
} else if (age <= 12){
  console.log('PG rated');
}else if(age <= 13){
  console.log('PG-13 rated');
} else if (age ===17){
  console.log('NC-17 rated');
  }else{
  console.log('x rated');
  }

//this is a switch statement
//

var color = 'orange';
switch(color){
  case 'green':
    console.log('i see green');
    break;
  case 'blue':
    console.log('i see blue');
    break;
  case 'orange':
    console.log('i see orange');
    break;
  case 'pink':
    console.log('i see pink');
    break;
}


//while loop
//

a = 1;

while(a < 10) {
  console.log('a is looping...', a);
a++;
}

//for loop
//

for(var i=0; i<10; i++){
  console.log('i ===', i);
}

























