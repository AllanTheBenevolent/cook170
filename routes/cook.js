var data = require("../userItems.json");

/*
 * GET cook page.
 */

exports.cookPage = function(req, res){
  res.render('cook', {userItems:data["items"]});
};
