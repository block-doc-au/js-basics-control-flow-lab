function scuberGreetingForFeet(distance){
  // Write your code here!
    if (distance <= 400) return 'This one is on me!';
    if (distance >2000 && distance <= 2500) return 'I will gladly take your thirty bucks.';
    if (distance>2500) return 'No can do.';
    
}

function ternaryCheckCity(cityName){
  // Write your code here!
return (cityName == "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tipType){
  // Write your code here!
  switch (tipType){
    case 'generous':
      return "Thank you so much.";
      break;

     case 'not as generous':
        return "Thank you.";
        break;
      default:
        return 'Bye.';
  }


  
}

//scuberGreetingForFeet(199);
//scuberGreetingForFeet(2010);
scuberGreetingForFeet(3000);

