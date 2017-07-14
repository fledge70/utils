function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("Randoms between 2 and 34:");
for (var i = 0; i < 500; i++) {
	console.log(randomInt(2, 34));
}