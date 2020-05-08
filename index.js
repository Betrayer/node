const main = require("./contacts");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      main.listContacts();
      break;

    case "get":
      main.getContactById(id);
      break;

    case "add":
      main.addContact(name, email, phone);
      break;

    case "remove":
      main.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
