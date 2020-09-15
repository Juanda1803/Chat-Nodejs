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

const getMessage = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
};

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalid");
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
};
