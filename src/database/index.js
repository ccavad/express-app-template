const mongoose = require("mongoose");
const config = require("../config");

mongoose
  .connect(config.database_url)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((err) => {
    console.log("Database connection error");
  });
