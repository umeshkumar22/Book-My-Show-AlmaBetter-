const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const { connection } = require("./connector");
const cors = require('cors');
const { bookMovieSchema } = require("./model/schema");

//Cross-Origin Resource Sharing for client and server communication
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// POST API which insert booking data to dataBase
app.post("/api/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;
  try {
    // if body, movie or slot are empty then it will be true
    // as well as it will check seat selected or not
    if (!movie || !slot) {
      res.send({ result: "Please Choose proper way!" });
    } else if (
      seats.A1 ||
      seats.A2 ||
      seats.A3 ||
      seats.A4 ||
      seats.D1 ||
      seats.D2
    ) {
      let data = new connection(req.body);
      let result = await data.save();
      res.status(200).send(result);
    } else {
      res.send({ result: "Please select a slot!" });
    }
  } catch (err) {
    // console.log(err);
    res.status(401).send({ result: "Please Don't use wrong way!" });
  }}
  );

//get api to get the last booking details
  app.get("/api/booking", async (req, res) => {
    let data = await connection.find();
    if (data.length == 0) {
      res.send([]);
    } else {
      res.send([data[data.length - 1]]);
    }
  });



app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;   