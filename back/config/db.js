const mongoose = require("mongoose");
require("dotenv").config();
/* Connected the app with mongoose */
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (client, err) => {
    try {
      console.log("Connected to db: " + client);
    } catch (err) {
      console.log(err);
    }
  }
);
