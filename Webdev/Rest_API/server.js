const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

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

app.get('/people', async (req, res) => {
    try {
        let result = await db.query("select * from people");
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message)
    }
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


app.post('/post', async (req, res) => {
    let person = req.body;
    let sql = "insert into people (firstname, lastname) values(?,?)"
    try {
        let result = await db.query(sql, [person.firstname, person.lastname]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message)
    }
});


app.listen(port, () => {
    console.log(`Server running on port  ${port}!`)
});

