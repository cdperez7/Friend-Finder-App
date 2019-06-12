var friends = require("../data/friends.js");
var path = require("path");

module.exports = function(app){

    app.get('/api/friends', function (req, res) {
       return res.json(friends);
    });

    // app.post("/api/friends", function(req, res){

    //     var bestMatch = {
    //         name: "",
    //         photo: "",
    //         friendDifference: 1000
    //     };

    //     console.log(req.body);

    //     var userData = req.body;
    //     var userScores = userData.scores;

    //     var totalDifference = 0;

    //     for (var i = 0; i < friends.length; i++){

    //         console.log(friends[i]);
    //         totalDifference = 0;

    //         for (var j = 0; j < friends[i].scores[j]; j++){

    //             totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

    //             if (totalDifference <= bestMatch.friendDifference){
    //                 bestMatch.name = friends[i].name;
    //                 bestMatch.photo = friends[i].photo;
    //                 bestMatch.friendDifference = totalDifference;
    //             }
    //         }
    //     }

    //     friends.push(userData);

    //     res.json(userData)
    // });


    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
    
        // Receive user details (name, photo, scores)
        var user = req.body;
    
        // parseInt for scores
        for(var i = 0; i < user.scores.length; i++) {
          user.scores[i] = parseInt(user.scores[i]);
        }
    
        // default friend match is the first friend but result will be whoever has the minimum difference in scores
        var bestFriendIndex = 0;
        var minimumDifference = 40;
    
        // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
        for(var i = 0; i < friends.length; i++) {
          var totalDifference = 0;
          for(var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
          }
    
          // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
          if(totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
          }
        }
    
        // after finding match, add user to friend array
        friends.push(user);
    
        // send back to browser the best friend match
        res.json(friends[bestFriendIndex]);
      });
    };

