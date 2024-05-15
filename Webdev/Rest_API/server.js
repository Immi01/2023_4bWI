const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = 3000;

const data = [
    { name: "Hans", age:17 },
    { name: "Paul", age:7 },
    { name: "Anna", age:20 },
    { name: "Gertrud", age:28 }
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/people', (req, res) => {
    res.send(data);
});

app.get('/people/:id', (req, res) => {
    let id = req.params.id;
    res.send(data[id]);
});


app.delete('/people/:id', (req, res) => {
    let id = req.params.id;
    data.splice(id,1);
    res.send("done");
});


app.post('/post', (req, res) => {
    data.push(req.body);

    res.send(req.body);
})


app.listen(port, () => {
    console.log(`Server running on port  ${port}!`)
})

