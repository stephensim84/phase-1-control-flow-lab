function scuberGreetingForFeet(feet){
  if (feet <= 400){
     return "This one is on me!";
   }  else if (feet > 2500) {
       return "No can do.";
   } else {
     return "I will gladly take your thirty bucks.";
    } 
  }


  function ternaryCheckCity(city) {

    let test = city === "NYC" ? "Ok, sounds good." : "No go.";

    return test;

  }

  function switchOnCharmFromTip(tip){


  switch(tip) {
    case "generous" :
       return "Thank you so much.";
    case "not as generous":
     return "Thank you.";
    default: 
      return "Bye."
  }
  
  }