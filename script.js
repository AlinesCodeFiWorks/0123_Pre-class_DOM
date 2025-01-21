let age = 16;
let height = 130; //cm
let temperature = 64; //F
let hasTicket = true;

//Can they ride the rollercoaster?
if (age >= 10) {
  if (height >= 120) {
    console.log("You can ride the rollercoaster!");
  } else {
    console.log("Sorry, you are not tall enough to ride the rollercoaster.");
  }
} else {
  console.log("Sorry, you are not old enough to ride the rollercoaster.");
}

//Can they enter the VIP lounge?
if (age >= 18) {
  console.log("You can enter the VIP lounge.");
} else if (hasTicket === true) {
  console.log("You can enter the VIP lounge.");
} else {
  console.log("You cannot enter the VIP lounge.");
}

//What should they wear based on the temperature?
temperature < 70
  ? console.log("Wear a jacket!")
  : console.log("Wear something light!");

//Is the person elligible for a free snack?
age >= 18
  ? console.log("No snack for you!") && hasTicket === true
  : console.log("You get a free snack!");
