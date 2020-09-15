const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");

db(
  "mongodb+srv://db_user_chat:eGsWHFHcZBaBYIJM@cluster0.o3elb.mongodb.net/<dbname>?retryWrites=true&w=majority"
);
const router = require("./network/routes");

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("The app is listening on http://localhost:3000");
