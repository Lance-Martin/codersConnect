var path = require('path');
var friendData = require('../data/friends.js');
module.exports = function(app){
app.get('/api/friends', function(req, res){
	res.json(friendData);
});
app.post('/api/friends/new', function(req, res){
	friendData.push(req.body);
	var differences = [];
	userScores = req.body.score;
	//Loop through friendData.length-1 to exclude the current user
	for (var k = 0; k < friendData.length-1;k++){
		var storedUser = friendData[k].score;
		var totalDifference = 0;
		for (var i = 0; i < userScores.length;i++){
			var sum = parseInt(userScores[i]) - parseInt(storedUser[i]);
			var absoluteSum = Math.abs(sum);
			totalDifference += absoluteSum;
		}
		differences.push(totalDifference);
		console.log(differences);
	}
	res.json(true);
});
};
