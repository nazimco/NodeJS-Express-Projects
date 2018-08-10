let express = require ('express');
let app = express ();

app.get('/', function (req, res){
    res.send('Hi There, welcome to my assignment!');
});

app.get('/speak/:animal', function (req, res){
    let sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "Don't eat me"
    };
    
    let animals = req.params.animal;
    let sound = sounds[animals]
    res.send('The ' + animals + ' says ' + sound);
});

app.get('/repeat/:message/:number', function (req, res){
    let messages = req.params.message
    let numbers = req.params.number
    let result = '';
    for(let i = 0; i < numbers; i++){
        result += messages;
    }
    res.send(result);
});

app.get('*', function(req, res){
    res.send('Sorry, page not found... What are you doing with your life?')
});

app.listen(3000, function(){
    console.log('Server has started!');
});