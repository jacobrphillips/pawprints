const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const path = require('path')
dotenv.config({path: __dirname + '/.env' })
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const pool = new Pool({connectionString: process.env.DATABASE_URL});
pool.connect();


app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// get all animals
app.get('/api/pets', (req, res) => {
    const query = `SELECT * FROM pets`;
    pool.query(query, (err, result)=> {
        if (err){
            console.error(err);
            res.sendStatus(500);
        } else {
            res.send(result.rows)
        }
    });
});

// get one animals
app.get('/api/pets/:id', (req, res) => {
    const id = req.params.id
    const query = `SELECT name, type, breed, colour, age, weight, gender, image_url FROM pets WHERE id = $1`;
    pool.query(query, [id], (err, result)=> {
        if (err){
            console.error(err);
            res.sendStatus(500);
        } else {
            res.send(result.rows[0])
        }
    });
});

// create an animal
app.post('/api/pets', (req, res) => {
    const { name, type, breed, colour, age, weight, gender, image_url } = req.body
    const query = `INSERT INTO pets(name, type, breed, colour, age, weight, gender, image_url) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    pool.query(query, [name, type, breed, colour, age, weight, gender, image_url], (err, result) => {
        if (err){
            console.error(err);
            res.sendStatus(500);
        } else {
            res.send(result.rows[0])
        }
    })
});

// patch an animal
app.patch('/api/pets/:id', (req, res) => {
    const id = req.params.id
    const { name, type, breed, colour, age, weight, gender, image_url } = req.body
    const query = `UPDATE pets SET name = COALESCE($1, name), type = COALESCE($2, type), breed = COALESCE($3, breed), colour = COALESCE($4, colour), age = COALESCE($5, age), weight = COALESCE($6, weight), gender = COALESCE($7, gender), image_url = COALESCE($8, image_url) WHERE id = $9 RETURNING *`;
    pool.query(query, [name, type, breed, colour, age, weight, gender, image_url, id], (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
          } else {
            res.send(result.rows[0]);
          }
    })
})

// delete an animal
app.delete('/api/pets/:id', (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM pets WHERE id = $1`;
    pool.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
          } else {
            res.send(result.rows[0]);
          }
    });
});



module.exports = app;