// define loop here
var loop = function(collection, callback){
	if (Array.isArray(collection)){
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i],i)
		}
	} else if (typeof collection === 'object'){
		for (var key in collection){
			callback(collection[key],collection)
		}
	}
}

// define extendObj here


// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above