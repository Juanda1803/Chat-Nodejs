const express = require("express");

const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response");

router.get("/", function (req, res) {
  controller
    .getMessage()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Unexpected error",
        400,
        "Error in the controller"
      );
    });
});

module.exports = router;
