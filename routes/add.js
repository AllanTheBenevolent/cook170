var data = require("../userItems.json");

exports.addItem = function(req, res){
  
   var newItem = {
        "name": req.query.itemName
	}

    data["items"].push(newItem);
	res.render('add',{userItems:data["items"]});
};