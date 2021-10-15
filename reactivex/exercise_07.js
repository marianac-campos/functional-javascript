// implement filter()

Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
        if (predicateFunction(itemInArray)) {
            results.push(itemInArray);
          }
	});

	return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"