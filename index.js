const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const CSVToJSON = require("csvtojson");
const dataArray = [];

CSVToJSON()
  .fromFile("WhatsgoodlyData-10.csv")
  .then((users) => {
    dataArray.push(users);
  })
  .catch((err) => {
    console.log(err);
  });
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send(dataArray);
});

app.listen(port, () => {
  console.log(`listenning at http://localhost:${port}`);
});