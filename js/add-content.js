var today= new Date();
console.log(today);
var hourNow = today.getHours();
console.log(hourNow);
var greeting;

if (hourNow > 18) {
greeting= 'Good evening!';}
else if (hourNow > 12) {
greeting = ' Good afternoon!';}
else if (hourNow > 0) {
greeting = 'Good morni ng!';}
else {
greeting = 'Welcome! ' ;
}
document .write( ' <h3>' +greeting + ' </ h3> ');