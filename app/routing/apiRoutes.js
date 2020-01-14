console.log("API Route Connected Successfully");

var friends = require("../data/friends.js");

function apiRoutes(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    
  });
  
}
module.exports = apiRoutes;
