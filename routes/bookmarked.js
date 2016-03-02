var data = require('../bookmarked.json');

/*
 * GET chickensandwichrecipe page.
 */

exports.bookmarkedPage = function(req, res){
  res.render('bookmarked', {bookmarkedrecipes:data["recipes"]});
};

exports.bookmarkedAction = function (req, res) {
	var recipe = req.body; // { 'mainbuddy': link }

	var dupe = false;
    data.recipes.map(function (obj) {
        if (obj.name === recipe.name)
            dupe = true;
    });
    
    if (!dupe)
		data.recipes.push(recipe);
    
    //res.redirect('/cook');
};