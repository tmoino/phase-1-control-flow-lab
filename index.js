function scuberGreetingForFeet(feet){
  // Write your code here
  if (feet <= 400) {
  return "This one is on me!";
  } 
  else if ( feet > 2000 && feet < 2499){
    return "I will gladly take your thirty bucks.";
  }
  else if ( feet > 2500)
    return "No can do."
  }
   
function ternaryCheckCity(destination){
  // Write your code here!
  var result = (destination === "NYC")? "Ok, sounds good." : "No go." ;
  return result; 
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch(tip){
  case tip = "generous":
    return "Thank you so much.";
  case tip = "not as generous":
    return "Thank you.";
  default:
    return "Bye."
}
}