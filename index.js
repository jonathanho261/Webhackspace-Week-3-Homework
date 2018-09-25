function mappingFunction(inList) {
	let mappedList = inList.map(elem => elem * 3);
	return mappedList;
}

let testList = [1, 97, 32, 4, 16, -5, 0.3]
console.log(mappingFunction(testList));

function challengeStringConcat(inList) {
	let reducedList = inList.reduce((prev, elem) => prev + elem);
	return reducedList;
}

let testString = ["\n\n\nHello, ", "my name is ", "Jonathan.", "\nHopefully this works :)\n\n\n" ];
console.log(challengeStringConcat(testString));