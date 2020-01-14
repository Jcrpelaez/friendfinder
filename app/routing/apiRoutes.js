console.log("api Route Connected Successfully");

var friends = require("../data/friends.js");

function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends)
  });

  
}
module.exports = apiRoutes;
