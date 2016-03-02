var data = require("../chickenskewers.json")

/*
 * GET chickensandwichrecipe page.
 */
exports.chickenskewersPage = function(req, res){
	var random_num = Math.random();
	if(random_num > 0.25){
	res.render('chickenskewers', {chickenskewersrecipe:data["chickenskewersing"]});
	}
  	res.redirect('/chickenskewersver2');
};
