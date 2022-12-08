const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { boolean } = require("joi");

const contactSchemaModel = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchemaModel);

const contactSchema = Joi.object({
  name: Joi.string().alphanum().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().integer().required(),
  favorite: Joi.bool(),
});

const favoriteContactSchema = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = {
  Contact,
  contactSchema,
  favoriteContactSchema,
};

// const fs = require("fs/promises");

// const path = require("path");

// const contactsPath = path.join(__dirname, "contacts.json");

// const { v4: uuidv4 } = require("uuid");

// const renewContacts = async (contacts) => {
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
// };

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   const contacts = JSON.parse(data);
//   return contacts;
// };

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const result = contacts.find((contact) => contact.id === contactId);
//   if (!result) {
//     return null;
//   }
//   return result;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex((contact) => contact.id === contactId);
//   if (idx === -1) {
//     return null;
//   }
//   const [removeContact] = contacts.splice(idx, 1);
//   await renewContacts(contacts);
//   return removeContact;
// };

// const addContact = async ({ name, email, phone }) => {
//   const newContact = {
//     id: uuidv4(),
//     name,
//     email,
//     phone,
//   };
//   const contacts = await listContacts();
//   contacts.push(newContact);
//   await renewContacts(contacts);
//   return newContact;
// };

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex((contact) => contact.id === contactId);
//   if (idx === -1) {
//     return null;
//   }
//   const contact = contacts[idx];
//   contacts[idx] = { ...contact, ...body };
//   await renewContacts(contacts);
//   return contacts[idx];
// };

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
