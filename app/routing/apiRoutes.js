console.log("API Route Connected Successfully");

// Links friends data
var friends = require("../data/friends.js");

// Sets function with both routes
function apiRoutes(app) {
  
  //created get route  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //created post route to handle survey results
  app.post("/api/friends", function (req, res) {
    
    var newFriend ={
      name: req.body.name,
      photo: req.body.phot,
      scores:[]
    };
    console.log(scores)

    var scoresArray = [];
    for (var i = 0; i <req.body.scores.length;i++){
      scoresArray.push(parseInt(req.body.scores[i]))
    }
    newFriend.scores = scoresArray

  });
  
}
module.exports = apiRoutes;
