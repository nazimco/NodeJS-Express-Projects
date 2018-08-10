let express = require('express');
let app = express ();

app.get('/', function(req, res){
    res.send('Hi there!');
});

app.get('/bye', function(req, res){
    res.send('Goodbye!!');
});

app.get('/dog', function(req, res){
    res.send('MEOW!');
    console.log('Someone Made a Request!!');
});

app.get('/r/:subredditName', function(req, res){
    let subreddit = req.params.subredditName;
    res.send('Welcome to the ' + subreddit.toUpperCase() + ' Subreddit!');
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res){
    console.log(req.params);
    res.send('Welcome to comments');
});

app.get('*', function(req, res){
    res.send('You are a STAR!!!');
});

app.listen(3000, function(){
    console.log('Server has started!!');
});