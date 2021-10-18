// implement concatAll()

Array.prototype.concatAll = function() {
	var results = [];
	console.log('initial results', results);

	this.forEach(function(subArray) {
		console.log('SubArray ', subArray);
		results.push.apply(results, subArray);
		console.log('TempResults ', results);
	});
	console.log(results);
	return results;
};

console.log(JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]");