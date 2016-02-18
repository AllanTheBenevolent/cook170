var data = require('../tastebuddiesdata.json');

/*
 * GET tastebuddies page.
 */

exports.tastebuddiesPage = function(req, res){
  res.render('tastebuddies', {alltastebuddies:data["alltastebuddies"]});
};
