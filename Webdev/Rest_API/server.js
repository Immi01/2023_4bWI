const express = require("express")


const app = express();
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

app.listen(port, () => {
    console.log(`Server running on port  ${port}!`)
})

