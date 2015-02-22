function flipCoin(){
	var flipped = Math.random(); // Decimal number between 0 and 1

	if (flipped < 0.50){
		console.log("Heads!");
	} else {
		console.log("Tails!");
	}
}

for (var i = 0; i < 10; i++){
	flipCoin();
}
