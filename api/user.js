let express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

    app.use(bodyParser.json());


let user = {
    id:1,
    firstName: 'Nikola',
    lastName: 'Razmovski'
}

app.post('/', (req, res) => {
    const {body} = req;
    if((body.user.firstName === user.firstName) && (body.user.lastName === user.lastName)){
        res.sendStatus(200);
    }else{
        res.sendStatus(400);
    }
})

app.get('/', (req, res) => {
    res.json(user);
})

app.listen('9966', () => console.log(`Example app listening on ${9966}`))
