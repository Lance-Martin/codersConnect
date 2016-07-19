app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, 'view.html'));
});
app.use('/', function(req, res){
	res.sendFile(path.join(__dirname, 'view.html'));
});
