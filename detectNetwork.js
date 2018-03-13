// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  for (var prefixChina = 622126; prefixChina <= 622925; prefixChina++) {
  	if (cardNumber.startsWith(prefixChina.toString()) && (16 <= cardNumber.length <= 19)) {
  		return 'China UnionPay';
  	}
  }
  
  for (var prefixChina2 = 624; prefixChina2 <= 626; prefixChina2++) {
  	if (cardNumber.startsWith(prefixChina2.toString()) && (16 <= cardNumber.length <= 19)) {
  		return 'China UnionPay';
  	}
  }

  for (var prefixChina3 = 6282; prefixChina3 <= 6288; prefixChina3++) {
  	if (cardNumber.startsWith(prefixChina3.toString()) && (16 <= cardNumber.length <= 19)) {
  		return 'China UnionPay';
  	}
  }

  if ((cardNumber.startsWith('4903') || cardNumber.startsWith('4905') || cardNumber.startsWith('4911') 
  	|| cardNumber.startsWith('4936')) || cardNumber.startsWith('564182') || cardNumber.startsWith('633110')
  	|| cardNumber.startsWith('6333') || cardNumber.startsWith('6759') && (cardNumber.length === 16 
  	|| cardNumber.length === 18 || cardNumber.length === 19)) {
  		return 'Switch';
  	}

  for (var prefixDiscover = 644; prefixDiscover <= 649; prefixDiscover++) {
  	if ((cardNumber.startsWith(prefixDiscover.toString())) && (cardNumber.length === 16 || cardNumber.length === 19)) {
  		return 'Discover';
  	}
  }
  if ((cardNumber.startsWith('6011') || cardNumber.startsWith('65')) && (cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Discover';
  }

  for (var prefixMasterCard = 51; prefixMasterCard <= 55; prefixMasterCard++) {
  	if ((cardNumber.startsWith(prefixMasterCard.toString())) && cardNumber.length === 16) {
  		return 'MasterCard';
  	}
  }

  if ((cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') 
  	|| cardNumber.startsWith('6304')) && 12 <= cardNumber.length <= 19) {
  	return 'Maestro';
  } else if ((cardNumber.startsWith('38') || cardNumber.startsWith('39')) && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if ((cardNumber.startsWith('34') || cardNumber.startsWith('37')) && cardNumber.length === 15) {
    return 'American Express';
  } else if (cardNumber.startsWith('4') && (cardNumber.length === 13 || cardNumber.length === 16 || 
  	cardNumber.length === 19)) {
    return 'Visa';
  } 
};
