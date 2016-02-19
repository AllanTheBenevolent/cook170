var data = require("../users.json");

/*
 * GET profile page.
 */

exports.profilePage = function(req, res){
  res.render('profile', {currentuser:data["users"]});
};
