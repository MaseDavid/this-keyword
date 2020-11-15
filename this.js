//part 1
//Question1
The value is that it is  windows defined.
//question 2
The output is  windows because it is globally defined
//question 3
it outputs Hello! Tim because the parent object is same as above
// question 4
Undefined because Instructor.Catowner is not defined     
//question 5
It returns oakland because location is a property of data and a property which is a property of instructor.
// question 6
//Part 2
//Question 1
obj.person.sayHi.call(obj);
//Question 2strings
Dome node lists

//Question 3
function sumEvenArguments(){
    let sum = 0;
    let arr = [].slice.call(arguments);
    for(let i =0; i < arr.length; i++){
    if(arr[i] % 2 ===0){
    sum += arr[i];}}
    return sum };
    //Question 4
 function arrayFrom(){
   return [...arguments]   
            }
    //Question 5
    function invokeMax(fn, max){
        let count = 0;
            return function(){
        count++;
        if(count > max){
        return "Maxed Out"}
        return fn.apply(this,arguments)}
        };
 // question 6
 function guessingGame(amount) {
    var guesses = 0;
    var answer = Math.floor(Math.random() * 11);
    return function anotherFunction(guess) {
        guesses++;
        if (guesses < amount) {
            if (guess > answer) {
                return "too high";
            } else if (guess < answer) { return "too low"; }
             else if (guess === answer) {
                  return "you got it"}
              }  else if(guesses === amount || guess === answer){
                  return "You are all done playing"}

              }
            };






