var path = require('path');
app.get('/api/friends', function(req, res){
	res.sendFile(path.join(__dirname, '../data/friends.js'));
});
app.post('/api/friends/new', function(req, res){

});
