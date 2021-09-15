const express = require('express');
const port = 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world from express')
});

app.post('/', (req,res) =>{
    console.log(req.body);
    res.send('this is response for post request ');
});

app.listen(port, () => {
    console.log(`ha ha App is listening from http://localhost:${port}`);
});