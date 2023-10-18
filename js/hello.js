
/* Send a customized message based on time
*/
//console.log("I am in the hello.js");

// get the date and time 
var today = new Date();
var hoursNow = today.getHours();

// display the greeting message 
// modify the code so that your code displays the proper greeting for the time of day
var greetings = "";
if (hoursNow <= 11){
  greetings = "Good Morning";
}else if (hoursNow <= 16){
  greetings = "Good Afternoon";
}else if (hoursNow <= 20){
  greetings = "Good Evening";
}else{
  greetings = "Good Night";
}

// write to the document 
document.write(greetings);