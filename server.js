const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');


 app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

app.get('/donuts', (req, res) => {
    // get all donuts
    res.send('get all the donuts')
});

   // get single donut by id
    app.get('/donuts/:id', (req, res) => {
        // get all donuts
        res.send('single donut')
    });

    // add a donut
app.post('/donuts', (req, res) => {
    console.log(req.body)
    res.send('donut added');
});

    // update a donut by id
    // console.log request params, and responde with string "updated donut with given" ID
app.patch('/donuts/:id', (req, res) => {
    console.log(req.params)
    res.send(`updated donuts with given ${req.params.id}`)
})

    // delete a donut by id
    // console.log request params and respond with string "deleted that donut with given ID"
    app.delete('/donuts/:id', (req, res) => {
        console.log(req.params)
        res.send("deleted that donut with given ID");
    })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))