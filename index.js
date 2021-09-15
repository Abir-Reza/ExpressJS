const express = require('express');
const port = 3000;

const app = express();
//sub app
const adminRoute = express.Router();

// baseUrl is the url on which app has been mounted.
adminRoute.get('/dashboard',(req,res) => {
    console.dir(req.originalUrl) // '/admin/new?sort=desc'
    console.dir(req.baseUrl) // '/admin'
    console.dir(req.url) // '/new'
    res.send('We are at Admin DashBoard');
});

app.use('/admin',adminRoute);

app.get('/user/:id', (req,res)=> {
    console.dir(req.originalUrl) // '/user/3?sort=desc'
    console.dir(req.baseUrl) // ''
    console.dir(req.url) // '/user/3'
    res.send('Hello World');
}); 


app.use(express.json());
app.post('/user/', (req,res) => {
    console.log(req.body);
    res.send('This is response from post method');
})



app.listen(port, () => {
    console.log(`ha ha App is listening from http://localhost:${port}`);
});