function VacationDecision () {
	var result = "Since your vacation type is "; 
	var vacaType = prompt("What is your vacation type? Muscial, Tropical or Adventurous?");
	var groupSize = prompt("How many people are joing you?");
	
	result = result + vacaType + " is a great vaca type for " + groupSize + "! You should go to:";

	if (vacaType === "Musical") {
		result = result + " New Orleans";
	}
	else if (vacaType === "Tropical") {
		result = result + " Beach vacation to Mexico";
	}
	else {
		result = result + " Whitewater rafting the Grand Canyon,";
	}
	
	result = result + " and ";
	
	if (groupSize <= 3) {
		result = result + " let's go First Class, treat yo self!";
	}
	else if (parseInt(groupSize) >= 3 && parseInt(groupSize) <= 5) {
		result = result + " you should take a helicopter, enjoy the views!";
	}
	else {
    result = result + " save some money by taking a charter flight!";
  }

	console.log(result);
}
VacationDecision();