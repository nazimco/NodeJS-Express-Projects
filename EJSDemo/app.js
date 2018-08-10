let express = require('express');
let app = express ();

app.get('/', function(req, res){
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res){
    let things = req.params.thing;
    res.render('love.ejs', {Koo: things});
});

app.listen(3000, function(){
    console.log('Server is Listening');
});