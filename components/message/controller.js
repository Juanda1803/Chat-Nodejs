const store = require("./store");

const addMessage = (user, messsage) => {
  return new Promise((resolve, reject) => {
    if (!user || !messsage) {
      console.error("[messageController] No user or message");
      return reject("The data is wrong");
    }
    const fullMessage = {
      user: user,
      messsage: messsage,
      date: new Date(),
    };
    store.add(fullMessage);

    resolve(fullMessage);
  });
};

const getMessage = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

module.exports = {
  addMessage,
  getMessage,
};
