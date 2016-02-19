var data = require("../users.json");

/*
 * GET editProfile page.
 */

exports.editProfilePage = function(req, res){
  res.render('editProfile', {currentuser:data["users"]});
};
