const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  res.send("list of message");
});

router.delete("/message", function (req, res) {
  console.log(req.body);
  console.log(req.query);
  res.send(`Message ${req.body.text} added succesful`);
});

app.listen(3000);
console.log("The app is listening on http://localhost:3000");
