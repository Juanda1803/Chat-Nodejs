const express = require("express");

const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response");
const e = require("express");

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;
  controller
    .getMessage(filterMessages)
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

router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error ", 500, e);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `User ${req.params.id} deleted`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal error", 500, e);
    });
});

module.exports = router;
