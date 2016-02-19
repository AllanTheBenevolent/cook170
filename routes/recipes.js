var data = require('../recipes.json');

/*
 * GET recipes page.
 */

exports.recipesPage = function(req, res){
  res.render('recipes', {allchicken:data["recipes"]});
};
