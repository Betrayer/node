const fs = require("fs");
const path = require("path");
const { promises: fsPromises } = fs;

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  try {
    const listContacts = await fsPromises.readFile(
      path.join(__dirname, "./db/contacts.json"),
      "utf8"
    );
    console.log("Contacts", listContacts);
  } catch (err) {
    console.log(err);
  }
}

async function getContactById(contactId) {
  try {
    const getList = await fsPromises.readFile(
      path.join(__dirname, "./db/contacts.json"),
      "utf8"
    );
    const parsedData = JSON.parse(getList);
    const findContactById = parsedData.find((item) => item.id === contactId);
    console.log("Contact:", findContactById);
  } catch (err) {
    console.log(err);
  }
}

async function removeContact(contactId) {
  try {
    const getList = await fsPromises.readFile(
      path.join(__dirname, "./db/contacts.json"),
      "utf8"
    );
    const parsedData = JSON.parse(getList);
    const deleteContactById = parsedData.filter(
      (item) => item.id !== contactId
    );

    console.table(deleteContactById);
  } catch (err) {
    console.log("err", err);
  }
}

async function addContact(name, email, phone) {
  try {
    const getList = await fsPromises.readFile(
      path.join(__dirname, "./db/contacts.json"),
      "utf8"
    );
    const parsedData = JSON.parse(getList);
    const newContact = { name, email, phone };
    const allContacts = [...parsedData, newContact];
    fs.writeFile(contactsPath, JSON.stringify(allContacts), () => {
      console.log("Contact was added.");
    });
  } catch (err) {
    console.log("err", err);
  }
}

module.exports = {
  contactsPath,
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
