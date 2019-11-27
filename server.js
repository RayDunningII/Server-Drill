const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'treats'
  });
   
  connection.connect(function(err) {
    if (err) {
      console.error('error');
    } else {
        console.log('connected');

    }
   
  });

 app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // get all donuts
app.get('/donuts', (req, res) => {
    connection.query('SELECT * FROM donuts', (err, donuts) => {
        if(err){
          res.send('something went wrong');
        }
        res.send(donuts);
    })
});

   // get single donut by id
    app.get('/donuts/:id', (req, res) => {
        connection.query(`SELECT * FROM donuts WHERE id = ${req.params.id}`, (err, donuts) => {
            if(err){
              res.send('something went wrong');
            }
            res.send(donuts);
        })
    });

    // add a donut
app.post('/donuts', (req, res) => {
    console.log(req.body)
    connection.query(`INSERT INTO donuts (name,filling,qty) VALUES ('${req.body.name}', '${req.body.filling}' , '${req.body.qty}');`, (err, donuts) => {
        if(err){
          res.send('something went wrong');
        }
        res.send(donuts);
    })
});

    // update a donut by id
    // UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition];
    // console.log request params, and responde with string "updated donut with given" ID
app.patch('/donuts/:id', (req, res) => {
    // console.log()
    connection.query(`UPDATE donuts SET name = '${req.body.name}' WHERE id='${req.params.id}';`, (err, donuts) => {
        if(err){
          res.send('something went wrong');
        }
        res.send(donuts);
    })
})

    // delete a donut by id
    // console.log request params and respond with string "deleted that donut with given ID"
    app.delete('/donuts/:id', (req, res) => {
        connection.query(`DELETE FROM donuts WHERE id = ${req.params.id}`, (err, donuts) => {
            if(err){
              res.send('something went wrong');
            }
            res.send(donuts);
        })
    });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))