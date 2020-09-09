const express = require("express");

let app = express();

app.use("/", function (req, res) {
  res.send("Hello");
});

app.listen(3000);
console.log("The app this listened in http://localhost:3000");
