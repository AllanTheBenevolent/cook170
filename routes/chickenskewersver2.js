var data = require("../chickenskewers.json")

/*
 * GET chickensandwichrecipe page.
 */

exports.chickenskewersver2Page = function(req, res){
  res.render('chickenskewersver2', {chickenskewersrecipe:data["chickenskewersing"]});
};
