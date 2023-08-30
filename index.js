function scuberGreetingForFeet(somenumber) {
  let distancefee;
  
  if (somenumber <= 400) {
    distancefee = 'This one is on me!';
  } else if (somenumber <= 2000) {
    distancefee = 'That will be twenty bucks.';
  } else if (somenumber <= 2500) {
    distancefee = 'I will gladly take your thirty bucks.';
  } else {
    distancefee = 'No can do.';
  }
  
  return distancefee;
}

function ternaryCheckCity(city){
   return city === 'NYC'? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye.";
  }
}

