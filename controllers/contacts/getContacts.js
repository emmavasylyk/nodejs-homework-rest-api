// const { listContacts } = require("../../models/contacts");
const { Contact } = require("../../models");

module.exports = async (req, res) => {
  const contacts = await Contact.find();
  console.log(contacts);
  // const contacts = await listContacts();
  if (!contacts) {
    res.status(400).json({
      status: "Error 400",
      message: `Bad request`,
    });
    return;
  }
  res.json({ status: "success", data: { contacts } });
};
