const db = require("mongoose");

db.Promise = global.Promise;

const connect = async (uri) => {
  await db
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("[db] Successfully connected"))
    .catch((err) => console.error("[db]", err));
};

module.exports = connect;
